import
{
	Component,
	Input,
	NgZone,
	OnInit
} 								from '@angular/core';

import { ProjectsDetailModel } 	from '../models/projects-detail.model';
import { ProjectsService } 		from '../services/projects.service';
import { BreadcrumbService } 	from '../../../services/index';

@Component({
	selector: 'stm-projects-detail',
	templateUrl: './projects-detail.component.html',
	styleUrls: [ './projects-detail.component.scss' ],
	providers: []
})
export class ProjectsDetailComponent implements OnInit
{
	@Input() projectNodeId: string;
	PageData: ProjectsDetailModel;

	constructor(
		private zone: NgZone,
		private projectsService: ProjectsService,
		private breadcrumbService: BreadcrumbService
	) { }

	ngOnInit()
	{
		this.projectsService.GetProjectDetail(this.projectNodeId).subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('*********************** PROJECTS DETAIL MODEL', this.PageData);

						//BREADCRUMB PAGE
						this.breadcrumbService.PageName = this.PageData.Title;
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}
}
