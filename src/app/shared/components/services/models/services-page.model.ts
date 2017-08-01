import { CdfMediaModel } 		from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 	from '../../../services/index';

export class ServicesPageModel
{
	ServiceMessage: string;
	ServicesList: CdfMediaModel[] = [];

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//ServiceMessage
			if (rawJson.description)
			{
				this.ServiceMessage = rawJson.description;
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
