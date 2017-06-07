import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, Inject}  from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel}           from '@angular/router';
import { DOCUMENT}                                                           from '@angular/platform-browser';
import { Subscription}                                                       from 'rxjs/Subscription';
import { PageScrollConfig}                                                   from './ng2-page-scroll-config';
import { PageScrollManager}                                                  from './ng2-page-scroll-manager';
import { EventService } 		                                             from '../../../services/event/event.service';


@Directive({
    selector: '[pageScroll]',
    host: { // tslint:disable-line:use-host-property-decorator
      '(click)': 'handleClick($event)',
    }
})
export class PageScrollDirective implements OnInit, OnDestroy 
{
    private eventServiceSubscription:Subscription;    
    private body: HTMLBodyElement;
    private scrollTopSources: any[];
    private timer: any = null;
    private interruptListenersAttached: boolean = false;
    
    @Input()
    public routerLink: any;

    @Input()
    public href: string;

    @Input()
    public fragment: string;

    @Input()
    public pageScrollOffset: number = null;

    @Input()
    public pageScrollDuration: number = null;

    @Input()
    public overrideScrollToYValue: number = null;

    @Input()
    public pageScrollInterruptible: boolean;

    @Output()
    pageScrollFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private eventService: EventService
    ) 
    {
        this.body = document.body;
        this.scrollTopSources = [this.document.documentElement, this.body, this.document.body.parentNode];
    };

    ngOnInit(): void
    { 
        this.eventServiceSubscription = this.eventService.eventObservable.subscribe
        (
            data =>
            {	
                let routerLinkFragment = this.routerLink + '#' + this.fragment;

                if (data && data.toLowerCase() === routerLinkFragment.toLowerCase())
                {                         
                    // console.log('EVENT RECEIVED SPANKY:', data);
                    // console.log('anchor routerLink:', this.routerLink);
                    // console.log('anchor href:', this.href);
                    // console.log('anchor fragment:', this.fragment);

                    this.scrollView(this.href);
                }
            },
            err => 					
            {
            },
            () => null
        )
    };
    
    ngOnDestroy(): any 
    {
        if (this.eventServiceSubscription)
        { 
           //console.log('UNSUBSCRIBE DAS SUBSCRIPTION', this.href);
           this.eventServiceSubscription.unsubscribe();
        } 
        
        if (this.interruptListenersAttached) 
        {
            PageScrollManager.detachInterfereListeners(this.body);
        }

        return undefined;
    };

    
    public stop(): boolean 
    {
        return this.stopInternal(true);
    };


    private static isUndefinedOrNull(variable: any): boolean 
    {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    
    private handleClick(clickEvent: Event): boolean 
    {
        if (this.routerLink) 
        {
            // We need to navigate their first.
            // Navigation is handled by the routerLink directive
            // so we only need to listen for route change
            // Note: the change event is also emitted when navigating to the current route again
            let subscription: Subscription = <Subscription>this.router.events.subscribe((routerEvent) => 
            {
                if (routerEvent instanceof NavigationEnd) 
                {
                    subscription.unsubscribe();
                    this.scrollView(this.href);
                } 
                else if (routerEvent instanceof NavigationCancel) 
                {
                    subscription.unsubscribe();
                }
                else if (routerEvent instanceof NavigationError) 
                {
                    subscription.unsubscribe();
                }                
            });
        }
        else 
        {
            this.scrollView(this.href);
        }

        return false; // to preventDefault()
    };

    private scrollView(anchor: string): void 
    {
        if (!anchor)
        { 
            // no anchor, so stop
            return;
        }
        
        // Stop all possibly running scroll animations
        PageScrollManager.stopAll();

        let anchorTarget: HTMLElement = this.document.getElementById(anchor.substr(1));

        //console.log('scrollView anchorTarget:', anchorTarget);

        if (anchorTarget === null) 
        {
            // Target not found, so stop
            return;
        }
        

        let scrollTop:number = document.body.scrollTop;
        let elementOffset:number = anchorTarget.offsetTop;
        let distance:number = (elementOffset - scrollTop);
        let pageScrollOffset: number = (PageScrollDirective.isUndefinedOrNull(this.pageScrollOffset) ? PageScrollConfig.defaultScrollOffset : this.pageScrollOffset);
        let targetScrollTop: number = (this.overrideScrollToYValue || this.overrideScrollToYValue === 0) ?  this.overrideScrollToYValue : ((anchorTarget.offsetTop - pageScrollOffset) + document.documentElement.clientHeight) - (document.documentElement.clientHeight*.15);
        //let targetScrollTop: number = (anchorTarget.offsetTop - pageScrollOffset);

        let startScrollTop: number = this.scrollTopSources.reduce((previousValue: any, currentValue: any, currentIndex: number, array: any[]) => 
        {
            // Get the scrolltop value of the first scrollTopSource that returns a value for its "scrollTop" property
            // that is not undefined and unequal to 0
            return previousValue ? previousValue : (currentValue && currentValue.scrollTop);
        }, undefined);

        let distanceToScroll: number = targetScrollTop - startScrollTop;
        
        // console.log('document.documentElement.clientHeight', document.documentElement.clientHeight);
        // console.log('anchorTarget.offsetTop:', anchorTarget.offsetTop);
        // console.log('pageScrollOffset:', pageScrollOffset);
        // console.log('targetScrollTop:', targetScrollTop);
        // console.log('overrideScrollToYValue:', this.overrideScrollToYValue);
        // console.log('overrideScrollToYValue:', (this.overrideScrollToYValue));
        // console.log('--------------------------------');
        // console.log('scrollTop:', scrollTop);
        // console.log('elementOffset:', elementOffset);
        // console.log('distance:', distance);
        // console.log('distanceToScroll:', distanceToScroll);
        // console.log('--------------------------------');

        if (distanceToScroll === 0) 
        {
            // We're at the final destination already, so stop
            return;
        }
        
        let startTime: number = new Date().getTime();

        let intervalConf: any = 
        {
            startScrollTop: startScrollTop,
            targetScrollTop: targetScrollTop,
            distanceToScroll: distanceToScroll,
            startTime: startTime,
            easing: PageScrollConfig.defaultEasingFunction
        };
        
        intervalConf.duration = this.pageScrollDuration === null ? PageScrollConfig.defaultDuration : this.pageScrollDuration;
        intervalConf.endTime = intervalConf.startTime + intervalConf.duration;

        if (intervalConf.duration <= PageScrollConfig._interval) 
        {
            // We should go there directly, as our "animation" would have one big step
            // only anyway and this way we save the interval stuff
            /*
            this.body.scrollTop works in Chrome
            this.document.documentElement.scrollTop works in Firefox
             */
            this.body.scrollTop = intervalConf.targetScrollTop;
            this.document.documentElement.scrollTop = intervalConf.targetScrollTop;
            this.pageScrollFinish.emit(true);
            return;
        }

        // Register the interrupt listeners if we want an interruptible scroll animation
        if (this.pageScrollInterruptible || (PageScrollDirective.isUndefinedOrNull(this.pageScrollInterruptible) && PageScrollConfig.defaultInterruptible)) 
        {
            PageScrollManager.attachInterfereListeners(this.body);
            this.interruptListenersAttached = true;
        }

        this.timer = setInterval((conf: any) => 
        {
            let currentTime: number = new Date().getTime();
            let newScrollTop: number;

            if (conf.endTime <= currentTime) 
            {
                this.stopInternal(false);
                newScrollTop = conf.targetScrollTop;
            } 
            else 
            {
                newScrollTop = conf.easing(
                    currentTime - conf.startTime,
                    conf.startScrollTop,
                    conf.distanceToScroll,
                    conf.duration);
            }

            //console.log('newScrollTop:', newScrollTop);
            
            // Set the new scrollTop to all scrollTopSource elements
            this.scrollTopSources.forEach((scrollTopSource: any) => 
            {
                if (scrollTopSource && !PageScrollDirective.isUndefinedOrNull(scrollTopSource.scrollTop)) 
                {
                    scrollTopSource.scrollTop = newScrollTop;
                }
            });
        }, PageScrollConfig._interval, intervalConf);

        // Register the instance as running one
        PageScrollManager.add(this);
    };

    private stopInternal(interrupted: boolean): boolean 
    {
        PageScrollManager.remove(this);

        if (this.interruptListenersAttached) 
        {
            PageScrollManager.detachInterfereListeners(this.body);
            this.interruptListenersAttached = false;
        }

        if (this.timer) 
        {
            clearInterval(this.timer);
            this.pageScrollFinish.emit(!interrupted);
            return true;
        }
        
        return false;
    };
}