import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../shared/index';

@Component({
	selector: 'stm-page-contact-us.component',
	templateUrl: './contact-us.component.html',
	providers: [ ]
})
export class ContactUsComponent extends BaseComponent implements OnInit 
{
	constructor(
		zone: NgZone		
	)
	{
		super(zone);
	}

	ngOnInit()
	{
	}
}