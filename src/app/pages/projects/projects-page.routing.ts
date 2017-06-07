import { ModuleWithProviders } 		from '@angular/core';
import { RouterModule }  			from '@angular/router';

import { ProjectsPageDetailComponent } 	from './detail/projects-page-detail.component';
import { ProjectsPageListComponent }	from './list/projects-page-list.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', 	redirectTo: 'list', pathMatch: 'full' },
	{ path: 'list', component: ProjectsPageListComponent },
	{ path: ':id', 	component: ProjectsPageDetailComponent }	
]);