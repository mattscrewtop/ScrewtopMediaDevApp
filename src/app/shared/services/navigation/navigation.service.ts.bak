import { Injectable } 					from '@angular/core';
import {
	Router,
	NavigationStart,
	NavigationExtras,
	NavigationEnd } 					from '@angular/router';
import { CdfMediaModel } 				from '@cdf/cdf-ng-media/lib';

@Injectable()
export class NavigationService 
{
	private ROUTES =
	{
		AboutUs: '/about-us',
		ContactUs: '/contact-us',
			
		Home: '/home',
		HomeServices: '/home#services',
		HomeProjects: '/home#projects',
		HomeProcess: '/home#process',
		HomeProductions: '/home#productions',

		MediaProductionDetail: '/productions',
		MediaProductionList: '/productions/list',
		MediaProductionShowDetail: '/productions/show',

		ProcessList: '/process-list',

		ProjectDetail: '/projects',
		ProjectList: '/projects/list',
			
		ServiceDetail: '/services',
		ServiceList: '/services/list',
			
		Spotlight: '/spotlight',
		SpotlightDetail: '/spotlight-detail',
			
		NoPage404: '/404'
	};

	//CREATE ARRAY CONTAINING HISTORY OF NAVIGATION
	RouteHistory: string[] = [];
	defaultNavigationExtras: NavigationExtras;

	constructor(private router: Router)
	{
		this.router.events.subscribe((event) =>
		{
			// NavigationStart
			if (event instanceof NavigationStart) 
			{
				this.RouteHistory.push(event.url);
			}	
			
			// NavigationEnd
			if (event instanceof NavigationEnd) 
			{
				window.scrollTo(0, 0);
			}			
		});	

		let defaultNavigationExtras: NavigationExtras =
		{
			fragment: ''
		};	
	}


	HasNavigationHistory()
	{
		return (this.RouteHistory.length > 0);
	}

	//HOME PAGE	
	GoToHomePage()
	{
		this.router.navigate([ this.ROUTES.Home ], this.defaultNavigationExtras);
	}

	
	//SERVICES LIST PAGE	
	GoToServicesListPage()
	{
		this.router.navigate([ this.ROUTES.ServiceList ]);
	}
	//SERVICE DETAIL PAGE
	GoToServiceDetailPage(nodeId)
	{
		console.log(this.ROUTES);
		this.router.navigate([ this.ROUTES.ServiceDetail, nodeId ]);
	}
	

	//PROJECTS LIST PAGE	
	GoToProjectsListPage()
	{
		this.router.navigate([ this.ROUTES.ProjectList ]);
	}
	//PROJECT DETAIL PAGE
	GoToProjectDetailPage(nodeId)
	{
		this.router.navigate([ this.ROUTES.ProjectDetail, nodeId ]);
	}
	

	//MEDIA PRODUCTIONS LIST PAGE	
	GoToMediaProductionsListPage()
	{
		this.router.navigate([ this.ROUTES.MediaProductionList ]);
	}
	//MEDIA PRODUCTION DETAIL PAGE
	GoToMediaProductionDetailPage(nodeId)
	{
		this.router.navigate([ this.ROUTES.MediaProductionDetail, nodeId ]);
	}
	//MEDIA PRODUCTION DETAIL PAGE
	GoToMediaProductionShowDetailPage(nodeId)
	{
		this.router.navigate([ this.ROUTES.MediaProductionShowDetail, nodeId ]);
	}

	
	

	//PROCESS LIST PAGE	
	GoToProcessListPage()
	{
		this.router.navigate([ this.ROUTES.ProcessList ]);
	}

	//ABOUT US PAGE	
	GoToAboutUsPage()
	{
		this.router.navigate([ this.ROUTES.AboutUs ]);
	}

	//CONTACT US PAGE	
	GoContactUsPage()
	{
		this.router.navigate([ this.ROUTES.ContactUs ]);
	}


	//404 PAGE
	GoTo404Page()
	{
		this.router.navigate([ this.ROUTES.NoPage404 ]);
	}


	//GENERIC NAVIGATION	
	GoToRoute(route: string, parameter?: any)
	{ 
		if (!parameter)
		{ 
			this.router.navigate([ route ]);
		}	
		else
		{
			this.router.navigate([ route, parameter ]);
		}		
	}


	//USE MEDIA TYPE TO DETERMINE WHAT ROUTE TO LOAD...	
	GoToMediaDetailPage(mediaModel: CdfMediaModel)
	{ 
		//console.log('********** MEDIA CLICKED:', mediaModel);
				
		//PROJECT
		if (mediaModel.Type === 'project')
		{ 
			this.GoToProjectDetailPage(mediaModel.Id);
		}

		//SERVICE
		else if (mediaModel.Type === 'service')
		{ 
			this.GoToServiceDetailPage(mediaModel.Id);
		}

		//MEDIA PRODUCTION
		else if (mediaModel.Type === 'production')
		{ 
			this.GoToMediaProductionDetailPage(mediaModel.Id);
		}		

	}
}