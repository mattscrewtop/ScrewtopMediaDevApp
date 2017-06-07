import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../shared/index';

@Component({
	selector: 'stm-page-about-us.component',
	templateUrl: './about-us.component.html',
	providers: []
})
export class AboutUsComponent extends BaseComponent implements OnInit 
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