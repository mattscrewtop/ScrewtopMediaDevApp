import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';

import { ProcessListComponent }		from './list/process-list.component';
import { ProcessService }			from './services/process.service';

@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		ProcessListComponent
	],
	exports:
	[
		ProcessListComponent
	],
	providers:
	[
		ProcessService
	]
})
export class ProcessModule {}