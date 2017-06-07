import
{
	NgModule,
	ModuleWithProviders
} 										from '@angular/core';
import { CommonModule }  				from '@angular/common';
import { RouterModule } 				from '@angular/router';

import
{
	//SHARED SERVICES
	BreadcrumbService,
	CdfFactoryService,
	CompareService,
	DataService,
	EventService,
	OnlineService,
	MatchMediaService,
	NavigationService
}										from './services/index';

@NgModule({
	imports:
	[
		//MODULES
		CommonModule,
		RouterModule
	],
	declarations:
	[
		//COMPONENTS

		//DIRECTIVES
	],
	exports:
	[		
	]
})
export class CoreModule
{
	static forRoot(): ModuleWithProviders
	{
		return {
			ngModule: CoreModule,
			providers:
			[ 
				BreadcrumbService,
				CdfFactoryService,
				CompareService,
				DataService,
				EventService,
				OnlineService,
				MatchMediaService,
				NavigationService
			]
		};
	}
}