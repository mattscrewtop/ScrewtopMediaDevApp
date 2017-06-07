import { NgModule }  				from '@angular/core';
import { Routes, RouterModule }  	from '@angular/router';

import { HomeComponent } 			from './pages/home/home.component';
import { TestComponent } 			from './pages/test/test.component';

export const routes: Routes = 
[
	{ path: '', 					redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', 				component: HomeComponent },
	{ path: 'test', 				component: TestComponent },

	//LAZY LOADED:
	{ path: 'about-us', 			loadChildren: './pages/about-us/about-us.module#AboutUsModule' },
	{ path: 'contact-us', 			loadChildren: './pages/contact-us/contact-us.module#ContactUsModule' },
	{ path: 'services', 			loadChildren: './pages/services/services-page.module#ServicesPageModule' },
	{ path: 'projects', 			loadChildren: './pages/projects/projects-page.module#ProjectsPageModule' },
	{ path: 'productions', 			loadChildren: './pages/productions/productions-page.module#ProductionsPageModule' },
	{ path: 'process', 				loadChildren: './pages/process/process-page-list.module#ProcessPageListModule' },
	
	//404 ROUTE
	//{ path: '**', component: Four04Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}