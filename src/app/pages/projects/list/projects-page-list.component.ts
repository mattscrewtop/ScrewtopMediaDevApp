import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../../shared/index';

@Component({
	selector: 'stm-projects-page',
	templateUrl: './projects-page-list.component.html',
	providers: []
})
export class ProjectsPageListComponent extends BaseComponent implements OnInit 
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