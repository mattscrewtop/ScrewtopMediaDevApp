import { ModuleWithProviders } 	from '@angular/core';
import { RouterModule }  		from '@angular/router';

import { ServicesComponent } 	from './services.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', component: ServicesComponent}
]);