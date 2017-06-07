import {
	Component,
	OnInit
} 									from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';

@Component({
	selector: 'stm-projects-page-detail-base',
	templateUrl: './projects-page-detail-base.component.html',
	styleUrls: [ './projects-page-detail-base.component.scss' ],
	providers: []
})
export class ProjectsPageDetailBaseComponent implements OnInit
{
	ProjectNodeId: string;

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
				this.ProjectNodeId = id;
			});			
	}
}