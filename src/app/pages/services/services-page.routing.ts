import { ModuleWithProviders } 		from '@angular/core';
import { RouterModule }  			from '@angular/router';

import { ServicesPageDetailComponent } 	from './detail/services-page-detail.component';
import { ServicesPageListComponent }	from './list/services-page-list.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', 	redirectTo: 'list', pathMatch: 'full' },
	{ path: 'list', component: ServicesPageListComponent },
	{ path: ':id', 	component: ServicesPageDetailComponent }	
]);