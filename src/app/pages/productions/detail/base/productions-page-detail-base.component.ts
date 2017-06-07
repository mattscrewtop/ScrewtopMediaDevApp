import {
	Component,
	OnInit
} 									from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';

@Component({
	selector: 'stm-productions-page-detail-base',
	templateUrl: './productions-page-detail-base.component.html',
	styleUrls: [ './productions-page-detail-base.component.scss' ],
	providers: []
})
export class ProductionsPageDetailBaseComponent implements OnInit
{
	MediaProductionNodeId: string;

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
				this.MediaProductionNodeId = id;
			});			
	}
}