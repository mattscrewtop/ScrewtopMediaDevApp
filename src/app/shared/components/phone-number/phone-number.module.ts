import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';

import { PhoneNumberItemComponent } 	from './item/phone-number-item.component';
import { PhoneNumberListComponent }		from './list/phone-number-list.component';
import { PhoneNumberService }			from './services/phone-number.service';

@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		PhoneNumberItemComponent,
		PhoneNumberListComponent
	],
	exports:
	[
		PhoneNumberItemComponent,
		PhoneNumberListComponent
	],
	providers:
	[
		PhoneNumberService
	]
})
export class PhoneNumberModule {}