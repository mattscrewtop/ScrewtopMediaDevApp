import { MediaProductionModel } from './media-production.model';

export class MediaProductionPageModel
{
	Message: string;
	MediaProductionList: MediaProductionModel[] = [];

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//ServiceMessage
			if (rawJson.description)
			{
				this.Message = rawJson.description;
			}

			//ServicesList
			if (rawJson.mediaProductionList)
			{
				for (let entry of rawJson.mediaProductionList) 
				{
					this.MediaProductionList.push(new MediaProductionModel(entry));
				}					
			}	
		}
	}
}