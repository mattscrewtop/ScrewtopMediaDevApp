import
{
	Component,
	OnInit,
	Input
} 								from '@angular/core';

import { SocialMediaModel } 	from '../models/social-media.model';
import { environment } 			from '../../../../../environments/environment';

@Component({
	selector: 'stm-social-media-item',
	templateUrl: './social-media-item.component.html',
	styleUrls: [ '../styles/social-media.component.scss' ],
	providers: []
})
export class SocialMediaItemComponent implements OnInit 
{
	@Input() socialMedia: SocialMediaModel;

	socialMediaTypeClass: string;

	constructor()
	{
	};

	ngOnInit()
	{
		switch (this.socialMedia.SocialMediaType)
		{ 
			// "Facebook",
			case environment.SOCIAL_MEDIA.Facebook:
				{ 
					this.socialMediaTypeClass = 'fa-facebook-official';
					break;
				}

			// "Twitter",
			case environment.SOCIAL_MEDIA.Twitter:
				{ 
					this.socialMediaTypeClass = 'fa-twitter-square';
					break;
				}				

			// "LinkedIn",
			case environment.SOCIAL_MEDIA.LinkedIn:
				{ 
					this.socialMediaTypeClass = 'fa-linkedin-square';
					break;
				}

			// "Instagram",
			case environment.SOCIAL_MEDIA.Instagram:
				{ 
					this.socialMediaTypeClass = 'fa-instagram';
					break;
				}

			// "Google+",
			case environment.SOCIAL_MEDIA.GooglePlus:
				{ 
					this.socialMediaTypeClass = 'fa-google-plus-square';
					break;
				}

			// "YouTube"
			case environment.SOCIAL_MEDIA.YouTube:
				{ 
					this.socialMediaTypeClass = 'fa-youtube-square';
					break;
				}				
			
			// "RSS"
			case environment.SOCIAL_MEDIA.RSS:
				{ 
					this.socialMediaTypeClass = 'fa-rss-square';
					break;
				}

			// "Snapchat""
			case environment.SOCIAL_MEDIA.Snapchat:
				{ 
					this.socialMediaTypeClass = 'fa-snapchat-square';
					break;
				}				
		}		
	};	
}