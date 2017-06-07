import { NgModule }								from '@angular/core';
import { CommonModule } 						from '@angular/common';

import { ProcessPageListBaseComponent }			from './base/process-page-list-base.component';
import { ProcessPageListDesktopComponent }		from './desktop/process-page-list-desktop.component';
import { ProcessPageListMobileComponent }		from './mobile/process-page-list-mobile.component';
import { ProcessPageListComponent } 			from './process-page-list.component';
import { routing }								from './process-page-list.routing';

import { SharedModule } 						from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		ProcessPageListBaseComponent,
		ProcessPageListDesktopComponent,
		ProcessPageListMobileComponent,
		ProcessPageListComponent
	],
	exports:
	[
		ProcessPageListComponent
	],
	providers:
	[
	]
})
export class ProcessPageListModule {}