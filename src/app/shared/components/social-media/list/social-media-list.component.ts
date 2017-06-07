import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { SocialMediaModel } 	from '../models/social-media.model';
import { SocialMediaService } 	from '../services/social-media.service';

@Component({
	selector: 'stm-social-media-list',
	templateUrl: './social-media-list.component.html',
	styleUrls: [ '../styles/social-media.component.scss' ],
	providers: []
})	
export class SocialMediaListComponent implements OnInit
{
	SocialMediaList: SocialMediaModel[] = [];

	constructor(
		private zone: NgZone,
		private socialMediaService: SocialMediaService		
	) { }

	ngOnInit()
	{ 
		this.socialMediaService.GetSocialMediaList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.SocialMediaList = data;
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}
}