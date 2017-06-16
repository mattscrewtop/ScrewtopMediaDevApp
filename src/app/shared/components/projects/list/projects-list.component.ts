import
{
	Component,
	EventEmitter,
	NgZone,
	OnInit,
	Output
} 								from '@angular/core';
import { CdfMediaModel } 		from '@cdf/cdf-ng-media/lib';

import { NavigationService } 	from '../../../services/index';
import { ProjectsPageModel } 	from '../models/projects-page.model';
import { ProjectsService } 		from '../services/projects.service';

@Component({
	selector: 'stm-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: [ './projects-list.component.scss' ],
	providers: []
})
export class ProjectsListComponent implements OnInit
{
	PageData: ProjectsPageModel;

	@Output() NotifyProjectCount = new EventEmitter<number>();

	constructor(
		private zone: NgZone,
		private projectsService: ProjectsService,
		private navigationService: NavigationService
	) { }

	ngOnInit()
	{
		this.projectsService.GetProjectsList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('*********************** PROJECTS MODEL', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}

	private doFeatureClick(mediaModel: CdfMediaModel)
	{
		this.navigationService.GoToProjectDetailPage(mediaModel.Id);
	}
}
