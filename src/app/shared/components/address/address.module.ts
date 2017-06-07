import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';

import { AddressItemComponent } 		from './item/address-item.component';
import { AddressListComponent }			from './list/address-list.component';
import { AddressService }				from './services/address.service';

@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		AddressItemComponent,
		AddressListComponent
	],
	exports:
	[
		AddressItemComponent,
		AddressListComponent
	],
	providers:
	[
		AddressService
	]
})
export class AddressModule {}