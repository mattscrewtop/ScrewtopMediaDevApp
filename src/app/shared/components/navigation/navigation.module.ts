import { NgModule } 				from '@angular/core';
import { RouterModule } 			from '@angular/router';
import { CommonModule }        		from '@angular/common';

import { AddressModule } 			from '../address';
import { PhoneNumberModule } 		from '../phone-number';
import { ServicesModule } 			from '../services';
import { SocialMediaModule } 		from '../social-media';

import { BreadcrumbsComponent }		from './desktop/breadcrumbs/breadcrumbs.component';
import { DesktopFooterComponent }	from './desktop/footer/desktop-footer.component';
import { DesktopHeaderComponent }	from './desktop/header/desktop-header.component';
import { MobileFooterComponent }	from './mobile/footer/mobile-footer.component';
import { MobileHeaderComponent } 	from './mobile/header/mobile-header.component';
import { NavComponent } 			from './nav/nav.component';
import { NavigationService } 		from './services/navigation.service';

//3RD PARTY...
import { CdfMediaModule } 			from '@titoagudelo/cdf-ng-media/lib';
import { CdfModule } 				from '@cdf/cdf-ng/lib';

import
{
	IsRouterLinkActiveDirective,
	PageScrollDirective
} 									from '../../directives/';

@NgModule({
	imports:
	[
		AddressModule,
		CommonModule,
		PhoneNumberModule,
		RouterModule,
		ServicesModule,
		SocialMediaModule,

		//3RD PARTY...
		CdfMediaModule,
		CdfModule
	],
	declarations:
	[
		//COMPONENTS
		BreadcrumbsComponent,
		DesktopFooterComponent,
		DesktopHeaderComponent,
		MobileFooterComponent,
		MobileHeaderComponent,
		NavComponent,

		//DIRECTIVES
		IsRouterLinkActiveDirective,
		PageScrollDirective
	],
	exports:
	[
		//COMPONENTS
		DesktopHeaderComponent,
		MobileHeaderComponent,

		//DIRECTIVES
		IsRouterLinkActiveDirective,
		PageScrollDirective
	],
	providers:
	[
		NavigationService
	]
})
export class NavigationModule { }
