import { CdfMediaModel } 			from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../shared/index';

export class HomeDesktopModel
{
    Title: string;
    Description: string;
	BackgroundVideo: CdfMediaModel;

	//HOME PAGE, SERVICES PAGE, PROJECT PAGE, 6-STEP PAGE
	constructor( rawJson:any )
	{
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

			//BACKGROUND VIDEO
			if (rawJson.backgroundVideo)
			{
				this.BackgroundVideo = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.backgroundVideo);
			}
		}
	}
}
