import {
	Directive,
	ElementRef,
	Output,
	EventEmitter,
	OnInit,
	AfterViewInit,
	OnDestroy
} 								from '@angular/core';
import { Observable } 			from 'rxjs/Observable';
declare var $: any;

@Directive({
    selector: '[isInView]'
})
export class IsInViewDirective implements OnInit, OnDestroy, AfterViewInit
{	
	@Output()
	notify: EventEmitter<boolean> = new EventEmitter<boolean>();

	private onScrollBind: EventListener = this.onScroll.bind(this);
	private elementRef: ElementRef;

    constructor(element: ElementRef) 
	{
		this.elementRef = element;
	}

    ngOnInit(): void
    {
		window.addEventListener('scroll', this.onScrollBind);
    }

    ngAfterViewInit(): void
    {
		//console.log('isInViewPort el:', this.elementRef);
    }

    ngOnDestroy(): void
    {
		window.removeEventListener('scroll', this.onScrollBind);
    }

    private onScroll(foo): void
    {
		this.notify.emit(this.isBetweenLimits());		
    }

	private isBetweenLimits(): boolean
	{
		const rect = this.elementRef.nativeElement.getBoundingClientRect();
		const topLimit:number = 0;
		const bottomLimit: number = window.innerHeight * .65;
		const elmentTop: number = rect.top;
		const elmentBottom: number = rect.bottom;

		//USED FOR DEBUGGING IN VIEW (isInView)		
		// let topBottomElement = document.getElementById("topBottom");
		// topBottomElement.style.top = topLimit + 'px';
		// topBottomElement.style.height = bottomLimit+'px';		
        
        // Is the element in viewport but larger then viewport itself
        const elementLargerThenViewport =  rect.top <= topLimit && rect.bottom >= -topLimit;

		//DO CALCULATION TO SEE IF ELEMENT IS IN BETWEEN AN AREA DEFINED BY AN TOP AND BOTTOM LIMITS		
		let isBetweenLimits: boolean =
			(elementLargerThenViewport)
				?
				(
					//IF ELEMENT IS LARGER THAN VIEWPORT, THEN CHECK
					//IF ELEMENT TOP IS BETWEEN TOP AND BOTTOM LIMITS
					//OR BOTTOM OF ELEMENT IS BELOW BOTTOM LIMIT
					((elmentTop >= topLimit) && (elmentTop <= bottomLimit) || elmentBottom >= bottomLimit)
				)
				:	
				(
					//IF ELEMENT TOP IS BETWEEN TOP AND BOTTOM LIMITS
					(elmentTop >= topLimit) && (elmentTop <= bottomLimit)
				);
		
		// console.log('**** isBetweenLimits ****:', isBetweenLimits);
		// console.log('element: ', this.elementRef.nativeElement.id);
		// console.log('elementLargerThenViewport:', elementLargerThenViewport);
		// console.log('topLimit:', topLimit);
		// console.log('das top:', elmentTop);
		// console.log('bottomLimit:', bottomLimit);
		// console.log('elmentTop >= topLimit:', (elmentTop >= topLimit));
		// console.log('elmentTop <= bottomLimit:', (elmentTop <= bottomLimit));
		// console.log('elmentBottom >= bottomLimit:', (elmentBottom >= bottomLimit));
		// console.log('das bottom:', elmentBottom);
		// console.log('rect.top <= topLimit:', (rect.top <= topLimit));
		// console.log('rect.bottom >= -topLimit:', (rect.bottom >= -topLimit));
		// console.log('-----------------------------------------------------------------');			
 	
		return isBetweenLimits;
	}

	
	private isVisible(): boolean 
	{
        const rect = this.elementRef.nativeElement.getBoundingClientRect();

        const threshold = 0;
        // Is the element in viewport but larger then viewport itself
        const elementLargerThenViewport = rect.top <= threshold && rect.bottom >= -threshold;
        // Is the top of the element in the viewport
        const topInsideViewport = rect.top >= 0 && rect.top <= window.innerHeight;
        // Is the bottom of the element in the viewport
        const belowInsideViewport = rect.bottom >= 0 && rect.bottom <= window.innerHeight;
        // Is the right side of the element in the viewport
        const rightsideInViewport = rect.right >= -threshold && (rect.right - threshold) <= window.innerWidth;
        // Is the left side of the element is the viewport
        const leftsideInViewport = rect.left >= -threshold && (rect.left - threshold) <= window.innerWidth;

		let isVisible: boolean =
			(
				elementLargerThenViewport || ((topInsideViewport || belowInsideViewport) && (rightsideInViewport || leftsideInViewport))
			);

		//console.log('isVisible:', isVisible);

        return isVisible;
	}

	private isCompletelyInViewport(): boolean 
	{
        const rect = this.elementRef.nativeElement.getBoundingClientRect();

        const threshold = 0;
        // Is the element in viewport but larger then viewport itself
        const elementLargerThenViewport = rect.top <= threshold && rect.bottom >= -threshold;		
        // Is the top of the element in the viewport
        const topInsideViewport = rect.top >= 0 && rect.top <= window.innerHeight;
        // Is the bottom of the element in the viewport
        const bottomInsideViewport = rect.bottom >= 0 && rect.bottom <= window.innerHeight;

		let isCompletelyInViewport: boolean =
			(
				elementLargerThenViewport || (topInsideViewport && bottomInsideViewport)
			);

        return isCompletelyInViewport;
	}
}