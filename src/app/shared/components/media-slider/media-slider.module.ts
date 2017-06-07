import { NgModule }						from '@angular/core';
import { CommonModule } 				from '@angular/common';
import { CdfMediaModule } 				from '@cdf/cdf-ng-media/lib';
import { CdfModule } 					from '@cdf/cdf-ng/lib';

import { MediaSliderComponent }			from './media-slider.component';

@NgModule({
	imports:
	[
		CommonModule,
		CdfMediaModule,
		CdfModule
	],
	declarations:
	[
		MediaSliderComponent
	],
	exports:
	[
		MediaSliderComponent
	],
	providers:
	[
	]
})
export class MediaSliderModule {}