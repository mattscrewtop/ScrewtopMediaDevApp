import
{
	Component,
	OnDestroy,
	OnInit
} 								from '@angular/core';

import { 
	BreadcrumbService,
	NavigationService 
} 								from '../../../../shared/services/index';

@Component({
	selector: 'stm-services-page-detail-desktop',
	templateUrl: './services-page-detail-desktop.component.html',
	styleUrls: [],
	providers: []
})
export class ServicesPageDetailDesktopComponent implements OnInit, OnDestroy
{
	constructor(	
		private breadcrumbService: BreadcrumbService,
		private navigationService: NavigationService
	)
	{
	}

	ngOnInit()
	{
		let that = this;

		//BREADCRUMB SERVICES LIST		
		this.breadcrumbService.AddBreadcrumb
		(
			'Services',
			'services list',
			function ()
			{
				that.navigationService.GoToServicesListPage();
			}
		);
	}	

	ngOnDestroy()
	{
		this.breadcrumbService.ClearBreadcrumbs();
	};
}