import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../../shared/index';

@Component({
	selector: 'stm-productions-page',
	templateUrl: './productions-page-list.component.html',
	providers: []
})
export class ProductionsPageListComponent extends BaseComponent implements OnInit 
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