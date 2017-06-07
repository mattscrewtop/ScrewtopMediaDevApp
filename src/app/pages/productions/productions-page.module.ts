import { NgModule }								from '@angular/core';
import { CommonModule } 						from '@angular/common';

import { ProductionsPageDetailBaseComponent }   	from './detail/base/productions-page-detail-base.component';
import { ProductionsPageDetailDesktopComponent }	from './detail/desktop/productions-page-detail-desktop.component';
import { ProductionsPageDetailMobileComponent }   	from './detail/mobile/productions-page-detail-mobile.component';
import { ProductionsPageDetailComponent }   		from './detail/productions-page-detail.component';

import { ProductionsPageListBaseComponent }			from './list/base/productions-page-list-base.component';
import { ProductionsPageListDesktopComponent }		from './list/desktop/productions-page-list-desktop.component';
import { ProductionsPageListMobileComponent }		from './list/mobile/productions-page-list-mobile.component';
import { ProductionsPageListComponent }				from './list/productions-page-list.component';

import { ProductionsPageShowBaseComponent }   		from './show/base/productions-page-show-base.component';
import { ProductionsPageShowDesktopComponent }		from './show/desktop/productions-page-show-desktop.component';
import { ProductionsPageShowMobileComponent }   	from './show/mobile/productions-page-show-mobile.component';
import { ProductionsPageShowComponent }   			from './show/productions-page-show.component';

import { routing }									from './productions-page.routing';

import { SharedModule } 							from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		ProductionsPageDetailBaseComponent,
		ProductionsPageDetailDesktopComponent,
		ProductionsPageDetailMobileComponent,
		ProductionsPageDetailComponent,

		ProductionsPageListBaseComponent,
		ProductionsPageListDesktopComponent,
		ProductionsPageListMobileComponent,
		ProductionsPageListComponent,

		ProductionsPageShowBaseComponent,
		ProductionsPageShowDesktopComponent,
		ProductionsPageShowMobileComponent,
		ProductionsPageShowComponent		
	],
	exports:
	[
		ProductionsPageDetailComponent,
		ProductionsPageListComponent,
		ProductionsPageShowComponent
	],
	providers:
	[
	]
})
export class ProductionsPageModule {}