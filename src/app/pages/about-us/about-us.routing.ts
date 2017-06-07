import { ModuleWithProviders } 	from '@angular/core';
import { RouterModule }  		from '@angular/router';

import { AboutUsComponent } 	from './about-us.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', component: AboutUsComponent}
]);