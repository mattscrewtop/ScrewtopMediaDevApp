import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';

import { SocialMediaItemComponent } 	from './item/social-media-item.component';
import { SocialMediaListComponent }		from './list/social-media-list.component';
import { SocialMediaService }			from './services/social-media.service';

@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		SocialMediaItemComponent,
		SocialMediaListComponent
	],
	exports:
	[
		SocialMediaItemComponent,
		SocialMediaListComponent
	],
	providers:
	[
		SocialMediaService
	]
})
export class SocialMediaModule {}