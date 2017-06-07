import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../../shared/index';

@Component({
	selector: 'stm-services-page',
	templateUrl: './services-page-list.component.html',
	providers: []
})
export class ServicesPageListComponent extends BaseComponent implements OnInit 
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