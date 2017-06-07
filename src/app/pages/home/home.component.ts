import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../shared/index';

@Component({
	selector: 'stm-page-home.component',
	templateUrl: './home.component.html',
	providers: []
})
export class HomeComponent extends BaseComponent implements OnInit 
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