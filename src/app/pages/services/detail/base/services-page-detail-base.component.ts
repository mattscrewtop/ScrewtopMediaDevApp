import {
	Component,
	OnInit
} 									from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';

@Component({
	selector: 'stm-services-page-detail-base',
	templateUrl: './services-page-detail-base.component.html',
	styleUrls: [ './services-page-detail-base.component.scss' ],
	providers: []
})
export class ServicesPageDetailBaseComponent implements OnInit
{
	ServiceNodeId: string;

	constructor
	(
		private route: ActivatedRoute
	)
	{	
	}

	ngOnInit()
	{
		this.route.params
			.map(params => params[ 'id' ])
			.subscribe((id) =>
			{
				this.ServiceNodeId = id;
			});			
	}
}