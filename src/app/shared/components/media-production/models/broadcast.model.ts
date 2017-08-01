import { CdfMediaModel } 			from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 	from '../../../services/index';
import { KeyValueModel }		from '../../../models/key-value.model';

export class BroadcastModel
{
    Title: string;
    Description: string;
	MediaOutlet: string;
	Image: CdfMediaModel;
	Schedule: KeyValueModel<string, string>[] = [];

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

			//BROADCAST IMAGE
			if (rawJson.image)
			{
				this.Image = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.image);
			}

			//MediaOutlet
			if (rawJson.mediaOutlet)
			{
				this.MediaOutlet = rawJson.mediaOutlet;
			}

			//Schedule
			if (rawJson.schedule)
			{
				for (let entry of rawJson.schedule)
				{
					this.Schedule.push(new KeyValueModel<string, string>(entry.day, entry.hours));
				}
			}
		}
	}
}
