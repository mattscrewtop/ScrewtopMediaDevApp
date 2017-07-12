import { NgModule }						from '@angular/core';
import { CommonModule } 				from '@angular/common';
import { CdfMediaModule } 				from '@titoagudelo/cdf-ng-media/lib';
import { CdfModule } 					from '@cdf/cdf-ng/lib';

import { MediaSliderModule }			from '../media-slider/media-slider.module';
import { ProjectsDetailComponent }		from './detail/projects-detail.component';
import { ProjectsListComponent }		from './list/projects-list.component';
import { ProjectsListSlideComponent }	from './list-slide/projects-list-slide.component';
import { ProjectsService }				from './services/projects.service';

@NgModule({
	imports:
	[
		CommonModule,
		CdfMediaModule,
		CdfModule,
		MediaSliderModule
	],
	declarations:
	[
		ProjectsDetailComponent,
		ProjectsListComponent,
		ProjectsListSlideComponent
	],
	exports:
	[
		ProjectsDetailComponent,
		ProjectsListComponent,
		ProjectsListSlideComponent
	],
	providers:
	[
		ProjectsService
	]
})
export class ProjectsModule {}
