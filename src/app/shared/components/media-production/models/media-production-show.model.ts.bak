import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../services/index';
import { MediaProductionModel } 	from './media-production.model';

export class MediaProductionShowModel
{
	Id: string;
	Title: string;
	Introduction: string;
    Description: string;
	Body: string;
	ProductionShowModel: CdfMediaModel;
	MediaProductionModel: MediaProductionModel;

	constructor(rawJson: any)
	{
		if(rawJson)
		{
			//Id
			if (rawJson.id)
			{
				this.Id = rawJson.id;
			}
			if (rawJson._doc)
			{
				this.Id = rawJson._doc;
			}

			//TITLE
			if (rawJson.title)
			{
				this.Title = rawJson.title;
			}

			//INTRODUCTION
			if (rawJson.introduction)
			{
				this.Introduction = rawJson.introduction;
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

			//ProductionShowModel
			if (rawJson)
			{
				this.ProductionShowModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson);
			}

			//MediaProductionModel
			if (rawJson.mediaProduction)
			{
				this.MediaProductionModel = new MediaProductionModel(rawJson.mediaProduction);
			}
		}
	}
}
