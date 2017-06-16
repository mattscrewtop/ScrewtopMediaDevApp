import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../services/index';

export class AboutDetailModel
{
    Title: string;
    Description: string;
	OurHistory: string;

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

			//OurHistory
			if (rawJson.ourHistory)
			{
				this.OurHistory = rawJson.ourHistory;
			}
		}
	}
}
