export class SocialMediaModel
{
	SocialMediaType: string;
	SocialMediaUrl: string;

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//SocialMediaType
			if (rawJson.title)
			{
				this.SocialMediaType = rawJson.title;
			}

			//SocialMediaUrl
			if (rawJson.socialMediaUrl)
			{
				this.SocialMediaUrl = rawJson.socialMediaUrl;
			}	
		}
	}
}