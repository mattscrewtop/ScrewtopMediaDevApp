import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import
{
	CdfFactoryService
} 									from '../../../shared/index';

export class ContactUsPageModel
{
    Title: string;
    Description: string;
	Tagline: string;
	SubTagline: string;
	MapImage: CdfMediaModel;
	BackgroundImageModel: CdfMediaModel;
	FormDescription: string;

	constructor(rawJson: any)
	{
		//CLOUD CMS DATA
		if (rawJson)
		{
			//TITLE
			if (rawJson.title)
			{
				this.Title = rawJson.title;
			}

			//DESCRIPTION
			if (rawJson.description)
			{
				this.Description = rawJson.description;
			}

			//Tagline
			if (rawJson.tagline)
			{
				this.Tagline = rawJson.tagline;
			}

			//Subtagline
			if (rawJson.subTagline)
			{
				this.SubTagline = rawJson.subTagline;
			}

			//MapImage
			if (rawJson.mapImage)
			{
				this.MapImage = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.mapImage);
			}

			//BACKGROUND VIDEO
			if (rawJson.image)
			{
				this.BackgroundImageModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.image);
			}

			//FORM DESCRIPTION
			if (rawJson.formDescription)
			{
				this.FormDescription = rawJson.formDescription;
			}
		}
	}
}
