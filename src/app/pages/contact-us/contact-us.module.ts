import { NgModule }						from '@angular/core';
import { CommonModule } 				from '@angular/common';
import { CdfMediaModule } 				from '@titoagudelo/cdf-ng-media/lib';

import { ContactUsBaseComponent }		from './base/contact-us-base.component';
import { ContactUsDesktopComponent }	from './desktop/contact-us-desktop.component';
import { ContactUsMobileComponent }		from './mobile/contact-us-mobile.component';
import { ContactUsComponent } 			from './contact-us.component';
import { ContactUsService }				from './services/contact-us.service';
import { routing }						from './contact-us.routing';

import { SharedModule } 				from '../../shared/shared.module';

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
		ContactUsBaseComponent,
		ContactUsDesktopComponent,
		ContactUsMobileComponent,
		ContactUsComponent
	],
	exports:
	[
		ContactUsComponent
	],
	providers:
	[
		ContactUsService
	]
})
export class ContactUsModule {}
