import { CdfMediaModel } 			from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../services/index';

export class ServicesDetailModel
{
    Title: string;
    Description: string;
	Body: string;
	MediaModel: CdfMediaModel;
	ServicesList: CdfMediaModel[] = [];

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

			//Body
			if (rawJson.body)
			{
				this.Body = rawJson.body;
			}

			//MediaModel
			if (rawJson.image && rawJson.imageHome)
			{
				rawJson.image = rawJson.imageHome;
				this.MediaModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson);
			}

			//ServicesList
			if (rawJson.serviceList)
			{
				for (let entry of rawJson.serviceList)
				{
					this.ServicesList.push(CdfFactoryService.CreateCdfMediaModelFromJson(entry));
				}
			}
		}
	}
}
