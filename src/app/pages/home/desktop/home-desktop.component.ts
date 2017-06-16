import
{
	AfterContentInit,
	AfterViewInit,
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';
import { Location } 				from '@angular/common';

import { HomeDesktopModel } 		from '../models/home-desktop.model';
import { EventService } 			from '../../../shared/services/index';
import { HomeService } 				from '../services/home.service';


let ScrollMagic = require("ScrollMagic");

@Component({
	selector: 'stm-home-desktop',
	templateUrl: './home-desktop.component.html',
	styleUrls: [ './home-desktop.component.scss' ],
	providers: []
})
export class HomeDesktopComponent implements AfterContentInit, AfterViewInit, OnInit
{
	// Init ScrollMagic
	scrollMagicController = new ScrollMagic.Controller();

	PageData: HomeDesktopModel;
	ProjectCount:number;
	isHomeInView: boolean;
	isServicesInView: boolean;
	isAboutInView: boolean;
	isProjectsInView: boolean;
	isProcessInView: boolean;
	isProductionsInView: boolean;

	constructor(
		private zone: NgZone,
		private homeService: HomeService,
		private location: Location,
		private eventService: EventService
	)
	{

	};

	ngOnInit()
	{
		this.isHomeInView = true;
		this.isServicesInView = false;
		this.isAboutInView = false;
		this.isProjectsInView = false;
		this.isProcessInView = false;
		this.isProductionsInView = false;

		this.homeService.GetHomePageDesktopData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('########### HOME PAGE DESKTOP DATA', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	};

	ngAfterContentInit()
	{
		//console.log('**************** AfterContentInit');
	};

	ngAfterViewInit()
	{
		//console.log('**************** AfterViewInit');
	};

	onNotifyAboutInView(isInView: boolean)
	{
		//console.log('is services in view:', isInView);
		this.isHomeInView = isInView;

		if (isInView)
		{
			this.isServicesInView = false;
			this.isProjectsInView = false;
			this.isProcessInView = false;
			this.isProductionsInView = false;
		}
	};

	onNotifyHomeInView(isInView: boolean)
	{
		//console.log('is services in view:', isInView);
		this.isHomeInView = isInView;

		if (isInView)
		{
			this.isHomeInView = false;
			this.isServicesInView = false;
			this.isAboutInView = false;
			this.isProjectsInView = false;
			this.isProcessInView = false;
			this.isProductionsInView = false;
		}
	};

	onNotifyServiceInView(isInView: boolean)
	{
		//console.log('is services in view:', isInView);
		this.isServicesInView = isInView;

		if (isInView)
		{
			this.isAboutInView = false;
			this.isHomeInView = false;
			this.isProjectsInView = false;
			this.isProcessInView = false;
			this.isProductionsInView = false;
		}
	};

	onNotifyProjectInView(isInView: boolean)
	{
		//console.log('is project in view:', isInView);
		this.isProjectsInView = isInView;

		if (isInView)
		{
			this.isAboutInView = false;
			this.isHomeInView = false;
			this.isServicesInView = false;
			this.isProcessInView = false;
			this.isProductionsInView = false;
		}
	};

	onNotifyProcessInView(isInView: boolean)
	{
		//console.log('is process in view:', isInView);
		this.isProcessInView = isInView;

		if (isInView)
		{
			this.isAboutInView = false;
			this.isHomeInView = false;
			this.isServicesInView = false;
			this.isProjectsInView = false;
			this.isProductionsInView = false;
		}
	};

	onNotifyProductionInView(isInView: boolean)
	{
		//console.log('is production in view:', isInView);
		this.isProductionsInView = isInView;

		if (isInView)
		{
			this.isAboutInView = false;
			this.isHomeInView = false;
			this.isServicesInView = false;
			this.isProjectsInView = false;
			this.isProcessInView = false;
		}
	};

	onNotifyProjectCount(projectCount: number)
	{
		//console.log('********************* PROJECT COUNT YO:', projectCount);

		this.ProjectCount = projectCount;

		//CREATE SCENES AFTER ARBITRARY AMOUNT OF TIME TO MAKE SURE CONTENT EXISTS IN DOM
		setTimeout(() =>
		{
			this.applyScrollMagic();
		}, 250);
	}


	private applyScrollMagic()
	{
		//console.log('*************** APPLPYING SCROLL MAGIC...');

		// pin the intro
		var pinIntroScene = new ScrollMagic.Scene
			({
				triggerElement: '#introWelcomeMessage',
				triggerHook: 0.25,
				duration: '45%'
			})
			.setPin('#introWelcomeMessage', { pushFollowers: false })
			.addTo(this.scrollMagicController);




		//LEARN MORE SCENE
		var ourScene = new ScrollMagic.Scene
			({
				triggerElement: '#serviceContainer',
				triggerHook: 0.85,
				duration: '95%'
			})
			.setClassToggle('#learnMoreContainer', 'fade-out') // add class to learnMoreContainer
			// .addIndicators
			// ({
			// 	name: 'fade learn more',
			// 	colorTrigger: 'black',
			// 	colorStart: '#75C695',
			// 	colorEnd: 'pink'
			// }) // this requires a plugin
			.addTo(this.scrollMagicController);


		// SERVICE CONTAINER SCENE
		var ourScene = new ScrollMagic.Scene
			({
				triggerElement: '#serviceContainer',
				triggerHook: 0.85,
				duration: '120%'
			})
			.setClassToggle('#serviceContainer', 'fade-in') // add class to learnMoreContainer
			// .addIndicators
			// ({
			// 	name: 'fade service',
			// 	colorTrigger: 'black',
			// 	colorStart: '#75C695',
			// 	colorEnd: 'pink'
			// }) // this requires a plugin
			.addTo(this.scrollMagicController);



		//CREATE A SCENE FOR EACH PROJECT IN LIST
		for (var i: number = 0; i < this.ProjectCount; i++)
		{
			var triggerIndex: number = i - 1;
			var targetTriggerElement = '#slide' + triggerIndex;
			var targetPinElement = '#slide' + i + ' .pin-wrapper';
			var duration = '200%';
			var triggerHook = 0.125;

			if (i === 0)
			{
				targetTriggerElement = '#slide0';
				duration = '100%';
			}

			//LAST ITEM IN ARRAY
			if (i === this.ProjectCount-1)
			{
				duration = '90%';
			}

			//PROJECT SCENE
			var projectScene = new ScrollMagic.Scene
				({
					triggerElement: targetTriggerElement,
					triggerHook: triggerHook,
					duration: duration
				})
				.setPin(targetPinElement)
				// .addIndicators
				// ({
				// 	name: 'pin project ' + i,
				// 	colorTrigger: 'black',
				// 	colorStart: '#75C695',
				// 	colorEnd: 'orange'
				// }) // this requires a plugin
				.addTo(this.scrollMagicController);
		}


		//BROADCAST TO LISTENER THAT ROUTE (via path) HAS LOADED.
		//THIS IS USED FOR SCROLLING TO A SPECIFIC NODE ELEMENT IN DOM (#serviceContainer, #projectContainer, #processContainer, #productionContainer)
		let locationPath = this.location.path(true);

		//console.log('locationPath:', locationPath);
		this.eventService.EventJustHappened(locationPath);
	};
}
