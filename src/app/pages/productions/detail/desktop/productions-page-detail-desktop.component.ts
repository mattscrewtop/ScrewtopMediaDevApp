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
	selector: 'stm-productions-page-detail-desktop',
	templateUrl: './productions-page-detail-desktop.component.html',
	styleUrls: [],
	providers: []
})
export class ProductionsPageDetailDesktopComponent implements OnInit, OnDestroy
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
			'Media Productions',
			'media production list',
			function ()
			{
				that.navigationService.GoToMediaProductionsListPage();
			}
		);		
	}	

	ngOnDestroy()
	{
		this.breadcrumbService.ClearBreadcrumbs();
	};
}