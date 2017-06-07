import { ModuleWithProviders } 	from '@angular/core';
import { RouterModule } 		from '@angular/router';

import { ContactUsComponent } 	from './contact-us.component';

export const routing:ModuleWithProviders = RouterModule.forChild(
[
	{ path: '', component: ContactUsComponent}
]);