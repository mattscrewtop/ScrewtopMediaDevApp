import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';

import { AboutDetailComponent }		from './detail/about-detail.component';
import { AboutService }			from './services/about.service';

@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		AboutDetailComponent
	],
	exports:
	[
		AboutDetailComponent
	],
	providers:
	[
		AboutService
	]
})
export class AboutModule {}
