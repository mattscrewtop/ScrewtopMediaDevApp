import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../../shared/index';

@Component({
	selector: 'stm-productions-page-show',
	templateUrl: './productions-page-show.component.html',
	providers: []
})
export class ProductionsPageShowComponent extends BaseComponent implements OnInit 
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