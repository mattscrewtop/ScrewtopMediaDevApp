import { NgModule }								from '@angular/core';
import { CommonModule } 						from '@angular/common';

import { ProjectsPageDetailBaseComponent }   	from './detail/base/projects-page-detail-base.component';
import { ProjectsPageDetailDesktopComponent }	from './detail/desktop/projects-page-detail-desktop.component';
import { ProjectsPageDetailMobileComponent }   	from './detail/mobile/projects-page-detail-mobile.component';
import { ProjectsPageDetailComponent }   		from './detail/projects-page-detail.component';

import { ProjectsPageListBaseComponent }		from './list/base/projects-page-list-base.component';
import { ProjectsPageListDesktopComponent }		from './list/desktop/projects-page-list-desktop.component';
import { ProjectsPageListMobileComponent }		from './list/mobile/projects-page-list-mobile.component';
import { ProjectsPageListComponent }			from './list/projects-page-list.component';

import { routing }								from './projects-page.routing';

import { SharedModule } 						from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		ProjectsPageDetailBaseComponent,
		ProjectsPageDetailDesktopComponent,
		ProjectsPageDetailMobileComponent,
		ProjectsPageDetailComponent,

		ProjectsPageListBaseComponent,
		ProjectsPageListDesktopComponent,
		ProjectsPageListMobileComponent,
		ProjectsPageListComponent
	],
	exports:
	[
		ProjectsPageDetailComponent,
		ProjectsPageListComponent
	],
	providers:
	[
	]
})
export class ProjectsPageModule {}