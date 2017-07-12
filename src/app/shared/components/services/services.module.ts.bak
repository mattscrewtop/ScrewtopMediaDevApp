import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';
import { CdfMediaModule } 				from '@cdf/cdf-ng-media/lib';

import { MediaSliderModule }			from '../media-slider/media-slider.module';
import { ServicesDetailComponent } from './detail/services-detail.component';
import { SubServiceDetailComponent } 		from './sub-service/sub-service.component';
import { ServicesListComponent } from './list/services-list.component';
import { ServicesListNameComponent }	from './list-name/services-list-name.component';
import { ServicesService }				from './services/services.service';

@NgModule({
	imports:
	[
		CommonModule,
		CdfMediaModule,
		MediaSliderModule
	],
	declarations:
	[
		ServicesDetailComponent,
		SubServiceDetailComponent,
		ServicesListComponent,
		ServicesListNameComponent
	],
	exports:
	[
		ServicesDetailComponent,
		SubServiceDetailComponent,
		ServicesListComponent,
		ServicesListNameComponent
	],
	providers:
	[
		ServicesService
	]
})
export class ServicesModule {}
