import { NgModule } 					from '@angular/core';
import { CommonModule }  				from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
}         								from '@angular/forms';
import { HttpModule } 					from '@angular/http';
import { RouterModule } 				from '@angular/router';


import
{
	//SHARED DIRECTIVES
	ControlFactoryDirective,
	IsInViewDirective,

	//APPLICATION COMPONENTS
	BaseComponent,

	//APPLICATION MODULES...
	AddressModule,
	AboutModule,
	MediaProductionModule,
	MediaSliderModule,
	NavigationModule,
	PhoneNumberModule,
	ProcessModule,
	ProjectsModule,
	ServicesModule,
	SocialMediaModule
} 										from './index';

//3RD PARTY...
import { CdfContactUsFormModule } 		from '@cdf/cdf-ng-contact-us-form/lib';
import { CdfMediaModule } 				from '@titoagudelo/cdf-ng-media/lib';
import { CdfModule } 					from '@cdf/cdf-ng/lib';
import { ToastModule } 					from 'ng2-toastr/ng2-toastr';

@NgModule({
	imports:
	[
		//MODULES
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,

		//APPLICATION MODULES
		AddressModule,
		AboutModule,
		MediaProductionModule,
		MediaSliderModule,
		NavigationModule,
		PhoneNumberModule,
		ProcessModule,
		ProjectsModule,
		ServicesModule,
		SocialMediaModule,

		//3RD PARTY...
		CdfContactUsFormModule,
		CdfMediaModule,
		CdfModule,
		ToastModule
	],
	declarations:
	[
		//COMPONENTS
		BaseComponent,

		//DIRECTIVES
		ControlFactoryDirective,
		IsInViewDirective
	],
	exports:
	[
		//COMPONENTS
		BaseComponent,

		//DIRECTIVES
		ControlFactoryDirective,
		IsInViewDirective,

		//MODULES
		CommonModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule,

		//APPLICATION MODULES
		AddressModule,
		AboutModule,
		MediaProductionModule,
		MediaSliderModule,
		NavigationModule,
		PhoneNumberModule,
		ProcessModule,
		ProjectsModule,
		ServicesModule,
		SocialMediaModule,

		//3RD PARTY...
		CdfContactUsFormModule,
		CdfMediaModule,
		CdfModule,
		ToastModule
	]
})
export class SharedModule
{
}
