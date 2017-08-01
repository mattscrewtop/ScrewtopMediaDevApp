import { CdfMediaModel } 			from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../shared/index';

export class EmployeeModel
{
    Title: string;
    Description: string;
	FirstName: string;
	LastName: string;
	MediaModel: CdfMediaModel;

	constructor(rawJson: any)
	{
		if(rawJson)
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

			//FirstName
			if (rawJson.firstName)
			{
				this.FirstName = rawJson.firstName;
			}

			//LastName
			if (rawJson.lastName)
			{
				this.LastName = rawJson.lastName;
			}

			this.MediaModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson);
		}
	}
}
