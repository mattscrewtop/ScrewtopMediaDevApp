import { CdfMediaModel } 		from '@titoagudelo/cdf-ng-media/lib';

import { CdfFactoryService } 	from '../../../services/index';

export class ProjectsPageModel
{
	Message: string;
	ProjectsList: CdfMediaModel[] = [];

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//Message
			if (rawJson.description)
			{
				this.Message = rawJson.description;
			}

			//ProjectsList
			if (rawJson.projectList)
			{
				for (let entry of rawJson.projectList) 
				{
					this.ProjectsList.push(CdfFactoryService.CreateCdfMediaModelFromJson(entry));
				}					
			}	
		}
	}
}
