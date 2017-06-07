import
{
	Component,
	NgZone,
	OnDestroy,
	OnInit
} 								from '@angular/core';

import { 
	BreadcrumbService,
	NavigationService 
} 								from '../../../../shared/services/index';

@Component({
	selector: 'stm-projects-page-detail-desktop',
	templateUrl: './projects-page-detail-desktop.component.html',
	styleUrls: [],
	providers: []
})
export class ProjectsPageDetailDesktopComponent implements OnInit, OnDestroy
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
			'Projects',
			'projects list',
			function ()
			{
				that.navigationService.GoToProjectsListPage();
			}
		);		
	}	

	ngOnDestroy()
	{
		this.breadcrumbService.ClearBreadcrumbs();
	};
}