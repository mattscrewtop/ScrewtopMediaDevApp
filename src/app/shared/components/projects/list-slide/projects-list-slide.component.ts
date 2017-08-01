import
{
	Component,
	EventEmitter,
	NgZone,
	OnInit,
	Output
} 								from '@angular/core';
import { CdfMediaModel } 		from '@titoagudelo/cdf-ng-media/lib';

import { NavigationService } 	from '../../../services/index';
import { ProjectsPageModel } 	from '../models/projects-page.model';
import { ProjectsService } 		from '../services/projects.service';

@Component({
	selector: 'stm-projects-list-slide',
	templateUrl: './projects-list-slide.component.html',
	styleUrls: [ './projects-list-slide.component.scss' ],
	providers: []
})
export class ProjectsListSlideComponent implements OnInit
{
	ProjectsPageModel: ProjectsPageModel;

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

						this.ProjectsPageModel = data;

						this.NotifyProjectCount.emit(this.ProjectsPageModel.ProjectsList.length);

						//console.log('*********************** PROJECTS MODEL', this.ProjectsPageModel);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}

	onLearnMoreClick(mediaModel: CdfMediaModel)
	{
		this.navigationService.GoToProjectDetailPage(mediaModel.Id);
	}
}
