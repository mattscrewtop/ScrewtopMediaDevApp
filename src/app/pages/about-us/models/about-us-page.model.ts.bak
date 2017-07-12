import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../shared/index';
import { KeyValueModel }			from '../../../shared/models/key-value.model';
import { EmployeeModel }			from './employee.model';

export class AboutUsPageModel
{
    Title: string;
    Description: string;
	OurHistory: string;
	QuickFacts: KeyValueModel<string, string>[] = [];
	EmployeeList: EmployeeModel[] = [];
	MediaModel: CdfMediaModel;
	Recognitions: string;
	News: string;
	Careers: string;

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

			//OurHistory
			if (rawJson.ourHistory)
			{
				this.OurHistory = rawJson.ourHistory;
			}

			//QuickFacts
			if (rawJson.quickFacts)
			{
				for (let entry of rawJson.quickFacts)
				{
					this.QuickFacts.push(new KeyValueModel<string, string>(entry.type, entry.value));
				}
			}

			//EmployeeList
			if (rawJson.employeeList)
			{
				for (let entry of rawJson.employeeList)
				{
					this.EmployeeList.push(new EmployeeModel(entry));
				}
			}

			//BACKGROUND VIDEO
			if (rawJson)
			{
				this.MediaModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson);
			}

			//Recognitions
			if (rawJson.recognitions)
			{
				this.Recognitions = rawJson.recognitions;
			}

			//News
			if (rawJson.news)
			{
				this.News = rawJson.news;
			}

			//Careers
			if (rawJson.careers)
			{
				this.Careers = rawJson.careers;
			}
		}
	}
}
