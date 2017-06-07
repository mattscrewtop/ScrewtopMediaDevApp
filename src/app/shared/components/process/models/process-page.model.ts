import { CdfFactoryService } 	from '../../../services/index';
import { ProcessModel }			from './process.model';

export class ProcessPageModel
{
    Title: string;
    Description: string;		
	ProcessList: ProcessModel[] = [];

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
			
			//ProcessList
			if (rawJson.processList)
			{
				for (let entry of rawJson.processList) 
				{
					this.ProcessList.push(new ProcessModel(entry));
				}					
			}	
		}
	}
}