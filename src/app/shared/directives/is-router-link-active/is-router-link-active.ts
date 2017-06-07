import { Directive, Input, OnInit, OnDestroy, Renderer, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';


@Directive({ selector: '[isRouterLinkActive]' })
export class IsRouterLinkActiveDirective implements OnInit, OnDestroy 
{
	private class: string;
	private subscription: Subscription;

	@Input()
	public routerLink: any;

	@Input()
	public fragment: string;

	@Input()
	set isRouterLinkActive(data: string) 
	{
		this.class = data;
	}


	constructor(
		private router: Router,
		private element: ElementRef,
		private renderer: Renderer,
		private location: Location
	)
	{
	}


	ngOnInit(): void
	{
		this.subscription = this.router.events.subscribe(s => 
		{
			if (s instanceof NavigationEnd) 
			{
				this.update();
			}
		});
	};


	ngOnChanges(changes: {}): void { this.update(); }


	ngOnDestroy(): void 
	{
		this.subscription.unsubscribe();
	};


	private update()
	{
		let locationPath = this.location.path(true);
		let routerLinkFragment = (this.fragment) ? this.routerLink + '#' + this.fragment : this.routerLink;

		if (locationPath && routerLinkFragment)
		{			
			let isAdd: boolean = (locationPath.toLowerCase() === routerLinkFragment.toLowerCase());

			// if (isAdd)	
			// {	
			// 	console.log('isRouterLinkActive locationPath:', locationPath);
			// 	console.log('isRouterLinkActive routerLinkFragment:', routerLinkFragment);
			// 	console.log('isRouterLinkActive isAdd:', isAdd);
			// 	console.log('isRouterLinkActive class:', this.class);
			// 	console.log('----------------------------------------------------');
			// }

			this.renderer.setElementClass(this.element.nativeElement, this.class, isAdd);
		}
	}
}