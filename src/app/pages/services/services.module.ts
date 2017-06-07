import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';

import { ServicesBaseComponent }		from './base/services-base.component';
import { ServicesDesktopComponent }	from './desktop/services-desktop.component';
import { ServicesMobileComponent }	from './mobile/services-mobile.component';
import { ServicesComponent } 		from './services.component';
import { ServicesService }			from './services/services.service';
import { routing }					from './services.routing';

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
		ServicesBaseComponent,
		ServicesDesktopComponent,
		ServicesMobileComponent,
		ServicesComponent
	],
	exports:
	[
		ServicesComponent
	],
	providers:
	[
		ServicesService
	]
})
export class ServicesModule {}