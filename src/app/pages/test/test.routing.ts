import { ModuleWithProviders } 	from '@angular/core';
import { RouterModule }  		from '@angular/router';

import { TestComponent } 		from './test.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', component: TestComponent}
]);