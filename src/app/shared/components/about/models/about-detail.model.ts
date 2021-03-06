import { CdfMediaModel } 			from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../services/index';

export class AboutDetailModel
{
    Title: string;
    Description: string;

	constructor(rawJson: any)
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
		}
	}
}
