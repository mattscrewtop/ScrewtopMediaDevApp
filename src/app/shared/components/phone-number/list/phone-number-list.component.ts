import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { PhoneNumberModel } 	from '../models/phone-number.model';
import { PhoneNumberService } 	from '../services/phone-number.service';

@Component({
	selector: 'stm-phone-number-list',
	templateUrl: './phone-number-list.component.html',
	styleUrls: [ '../styles/phone-number.component.scss' ],
	providers: []
})	
export class PhoneNumberListComponent implements OnInit
{
	PhoneNumberList: PhoneNumberModel[] = [];

	constructor(
		private zone: NgZone,
		private socialMediaService: PhoneNumberService		
	) { }

	ngOnInit()
	{ 
		this.socialMediaService.GetPhoneNumberList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.PhoneNumberList = data;
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}
}