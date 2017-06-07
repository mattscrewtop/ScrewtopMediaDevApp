import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { AddressModel } 	from '../models/address.model';
import { AddressService } 	from '../services/address.service';

@Component({
	selector: 'stm-address-list',
	templateUrl: './address-list.component.html',
	styleUrls: [ '../styles/address.component.scss' ],
	providers: []
})	
export class AddressListComponent implements OnInit
{
	AddressList: AddressModel[] = [];

	constructor(
		private zone: NgZone,
		private addressService: AddressService		
	) { }

	ngOnInit()
	{ 
		this.addressService.GetAddressList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.AddressList = data;
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}
}