import { NgModule }								from '@angular/core';
import { CommonModule }							from '@angular/common';
import { CdfMediaModule } 						from '@cdf/cdf-ng-media/lib';
import { CdfModule } 							from '@cdf/cdf-ng/lib';

import { BroadcastComponent }					from './broadcast/broadcast.component';
import { MediaProductionComponent }				from './production/media-production.component';
import { MediaProductionListComponent }			from './list/media-production-list.component';
import { MediaProductionShowComponent }			from './production-show/media-production-show.component';
import { MediaProductionShowListComponent }		from './production-show-list/media-production-show-list.component';
import { MediaProductionService }				from './services/media-productions.service';

@NgModule({
	imports:
	[
		CommonModule,
		CdfMediaModule,
		CdfModule
	],
	declarations:
	[
		BroadcastComponent,
		MediaProductionComponent,
		MediaProductionListComponent,
		MediaProductionShowComponent,
		MediaProductionShowListComponent
	],
	exports:
	[
		BroadcastComponent,
		MediaProductionComponent,
		MediaProductionListComponent,
		MediaProductionShowComponent,
		MediaProductionShowListComponent
	],
	providers:
	[
		MediaProductionService
	]
})
export class MediaProductionModule {}