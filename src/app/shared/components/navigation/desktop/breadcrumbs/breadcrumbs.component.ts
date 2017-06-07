import { Router } 					from '@angular/router';
import { Component, OnInit } 		from '@angular/core';

import { 
	BreadcrumbService,
	NavigationService
 } 									from '../../../../services/navigation';

import { BreadcrumbModel }			from '../../../../models';

@Component({
	selector: 'stm-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: [ './breadcrumbs.component.scss' ],
	providers: []
})
export class BreadcrumbsComponent implements OnInit 
{	
	hasBreadCrumbs: boolean;

	constructor
	(
		private breadcrumbService: BreadcrumbService,
		private navigationService: NavigationService
	)
	{
	};

	ngOnInit()
	{
		this.breadcrumbService.hasBreadCrumbObservable.subscribe(
			//SUCCESS
			data =>
			{	
				this.hasBreadCrumbs = data;
			},

			//ERROR
			err =>
			{ 
			},

			//COMPLETE
			() =>
			{ 
			}		
		)

		this.hasBreadCrumbs = (this.breadcrumbService.BreadCrumbList && this.breadcrumbService.BreadCrumbList.length > 0);
	};

	GoToHomeState()
	{ 
		this.navigationService.GoToHomePage();
	};

	GoToBreadcrumb(breadcrumb: BreadcrumbModel)
	{ 
		breadcrumb.OnClick();
	};
}