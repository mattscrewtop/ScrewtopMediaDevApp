import { ModuleWithProviders } 				from '@angular/core';
import { RouterModule }  					from '@angular/router';

import { ProductionsPageDetailComponent } 	from './detail/productions-page-detail.component';
import { ProductionsPageListComponent }		from './list/productions-page-list.component';
import { ProductionsPageShowComponent }		from './show/productions-page-show.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', 	redirectTo: 'list', pathMatch: 'full' },
	{ path: 'list', component: ProductionsPageListComponent },
	{ path: ':id', 	component: ProductionsPageDetailComponent },
	{ path: 'show/:id', component: ProductionsPageShowComponent }
]);