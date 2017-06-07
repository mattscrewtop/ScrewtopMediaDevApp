import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, Inject}  from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel}           from '@angular/router';
import { DOCUMENT}                                                           from '@angular/platform-browser';
import { Subscription}                                                       from 'rxjs/Subscription';
import { PageScrollConfig, IEasingFunction}                                  from './ng2-page-scroll-config';
import { PageScrollManager}                                                  from './ng2-page-scroll-manager';
import { EventService } 		                                             from '../../../services/event/event.service';

export declare class PageScroll implements OnInit, OnDestroy 
{
    private eventServiceSubscription:Subscription;    
    private body: HTMLBodyElement;
    private scrollTopSources: any[];
    private timer: any;
    private interruptListenersAttached: boolean;

    routerLink: any;
    href: string;
    fragment: string;
    pageScrollOffset: number;
    pageScrollDuration: number;
    overrideScrollToYValue: number;    
    pageScrollEasing: IEasingFunction;
    pageScrollInterruptible: boolean;
    pageScrollFinish: EventEmitter<boolean>;
    
    private router;
    private document;
    private eventService: EventService;
    
    constructor(
        router: Router,
        document: any,
        eventService: EventService
    );
    
    ngOnInit(): void;
    ngOnDestroy(): any;

    stop(): boolean;
    
    private static isUndefinedOrNull(variable);
    private handleClick(clickEvent);
    private scrollView(anchor);
    private stopInternal(interrupted);
}