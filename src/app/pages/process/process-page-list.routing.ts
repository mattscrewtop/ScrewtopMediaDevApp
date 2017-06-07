import { ModuleWithProviders } 			from '@angular/core';
import { RouterModule } 				from '@angular/router';

import { ProcessPageListComponent } 	from './process-page-list.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', component: ProcessPageListComponent }
]);