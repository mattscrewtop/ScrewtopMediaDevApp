import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { CdfMediaModule } 			from '@titoagudelo/cdf-ng-media/lib';

import { AboutUsBaseComponent } 	from './base/about-us-base.component';
import { AboutUsDesktopComponent }	from './desktop/about-us-desktop.component';
import { AboutUsMobileComponent }	from './mobile/about-us-mobile.component';
import { AboutUsComponent } 		from './about-us.component';
import { AboutUsService }			from './services/about-us.service';
import { routing }					from './about-us.routing';

import { SharedModule } 			from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		CdfMediaModule,
		routing,
		SharedModule
	],
	declarations:
	[
		AboutUsBaseComponent,
		AboutUsDesktopComponent,
		AboutUsMobileComponent,
		AboutUsComponent
	],
	exports:
	[
		AboutUsComponent
	],
	providers:
	[
		AboutUsService
	]
})
export class AboutUsModule {}
