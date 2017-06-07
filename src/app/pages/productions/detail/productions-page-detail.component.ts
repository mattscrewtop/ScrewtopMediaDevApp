import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../../shared/index';

@Component({
	selector: 'stm-productions-page-detail',
	templateUrl: './productions-page-detail.component.html',
	providers: []
})
export class ProductionsPageDetailComponent extends BaseComponent implements OnInit 
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