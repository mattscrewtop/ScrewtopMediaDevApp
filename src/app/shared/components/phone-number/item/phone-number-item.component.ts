import
{
	Component,
	OnInit,
	Input
} 								from '@angular/core';

import { PhoneNumberModel } 	from '../models/phone-number.model';
import { environment } 			from '../../../../../environments/environment';

@Component({
	selector: 'stm-phone-number-item',
	templateUrl: './phone-number-item.component.html',
	styleUrls: [ '../styles/phone-number.component.scss' ],
	providers: []
})
export class PhoneNumberItemComponent implements OnInit 
{
	@Input() phoneNumberModel: PhoneNumberModel;

	constructor()
	{
	};

	ngOnInit()
	{
	};	
}