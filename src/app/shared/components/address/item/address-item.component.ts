import
{
	Component,
	OnInit,
	Input
} 								from '@angular/core';

import { AddressModel } 		from '../models/address.model';
import { environment } 			from '../../../../../environments/environment';

@Component({
	selector: 'stm-address-item',
	templateUrl: './address-item.component.html',
	styleUrls: [ '../styles/address.component.scss' ],
	providers: []
})
export class AddressItemComponent implements OnInit 
{
	@Input() addressModel: AddressModel;

	constructor()
	{
	};

	ngOnInit()
	{		
	};	
}