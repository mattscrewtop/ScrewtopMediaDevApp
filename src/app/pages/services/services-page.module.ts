import { NgModule }								from '@angular/core';
import { CommonModule } 						from '@angular/common';

import { ServicesPageDetailBaseComponent }   	from './detail/base/services-page-detail-base.component';
import { ServicesPageDetailDesktopComponent }	from './detail/desktop/services-page-detail-desktop.component';
import { ServicesPageDetailMobileComponent }   	from './detail/mobile/services-page-detail-mobile.component';
import { ServicesPageDetailComponent }   		from './detail/services-page-detail.component';

import { ServicesPageListBaseComponent }		from './list/base/services-page-list-base.component';
import { ServicesPageListDesktopComponent }		from './list/desktop/services-page-list-desktop.component';
import { ServicesPageListMobileComponent }		from './list/mobile/services-page-list-mobile.component';
import { ServicesPageListComponent }			from './list/services-page-list.component';

import { routing }								from './services-page.routing';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		ServicesPageDetailBaseComponent,
		ServicesPageDetailDesktopComponent,
		ServicesPageDetailMobileComponent,
		ServicesPageDetailComponent,

		ServicesPageListBaseComponent,
		ServicesPageListDesktopComponent,
		ServicesPageListMobileComponent,
		ServicesPageListComponent
	],
	exports:
	[
		ServicesPageDetailComponent,
		ServicesPageListComponent
	],
	providers:
	[
	]
})
export class ServicesPageModule {}