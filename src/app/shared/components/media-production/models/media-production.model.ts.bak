import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import { CdfFactoryService } 	from '../../../services/index';
import { BroadcastModel } 		from './broadcast.model';
import { AddressModel }			from '../../../models/address.model';

export class MediaProductionModel
{
	Id: string;
	Title: string;
	Introduction: string;
    Description: string;
	Image: CdfMediaModel;
	Website: string;
	BroadcastList: BroadcastModel[] = [];
	Location: AddressModel;

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

			//MEDIA PRODUCTION IMAGE
			if (rawJson.image)
			{
				this.Image = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.image);
			}

			//Website
			if (rawJson.website)
			{
				this.Website = rawJson.website;
			}

			//BroadcastList
			if (rawJson.broadcast)
			{
				for (let entry of rawJson.broadcast)
				{
					this.BroadcastList.push(new BroadcastModel(entry));
				}
			}

			//Location
			if (rawJson.location)
			{
				this.Location = new AddressModel(rawJson.location);
			}
		}
	}
}
