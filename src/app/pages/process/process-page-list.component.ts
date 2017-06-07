import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../shared/index';

@Component({
	selector: 'stm-process-page',
	templateUrl: './process-page-list.component.html',
	providers: []
})
export class ProcessPageListComponent extends BaseComponent implements OnInit 
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