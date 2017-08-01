import { BrowserModule } 				from '@angular/platform-browser';
import { FormsModule } 					from '@angular/forms';
import { HttpModule } 					from '@angular/http';
import { NgModule } 					from '@angular/core';

// APP ROOT
import { AppComponent } 				from './app.component';
import { AppRoutingModule } 			from './app-routing.module';

// APPLICATION MODULES - THESE MODULES ARE LOADED WHEN APP LOADS
import { HomeModule } 					from './pages/home/home.module';
import { CoreModule }   				from './shared/core.module';
import { TestModule }      				from './pages/test/test.module';

//3RD PARTY
import { ToastModule, ToastOptions } 	from 'ng2-toastr/ng2-toastr';
import { CdfMediaModule }				from '@titoagudelo/cdf-ng-media/lib';
import
{
	CdfMediaConfig,
	ToastrCustomOption
} 										from './configs';

@NgModule(
	{
		imports:
		[
			BrowserModule,
			FormsModule,
			HttpModule,

			//3rd PARTY
			ToastModule.forRoot(),
			CdfMediaModule.forRoot(CdfMediaConfig),

			//APPLICATION MODULES
			AppRoutingModule,
			CoreModule.forRoot(),
			HomeModule,
			TestModule
		],
		declarations:
		[
			AppComponent
		],
		providers:
		[
			{ provide: ToastOptions, useClass: ToastrCustomOption }
		],
		bootstrap:
		[
			AppComponent
		]
	})
export class AppModule { }
