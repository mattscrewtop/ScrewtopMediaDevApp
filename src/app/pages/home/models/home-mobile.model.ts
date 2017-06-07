import { CdfMediaModel } 			from '@cdf/cdf-ng-media/lib';

import { CdfFactoryService } 		from '../../../shared/index';

export class HomeMobileModel
{
    Title: string;
    Description: string;	
	FeatureList: CdfMediaModel[] = [];
	BackgroundImageModel: CdfMediaModel;

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
			
			//BACKGROUND VIDEO
			if (rawJson.backgroundVideo)
			{ 
				this.BackgroundImageModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.backgroundVideo);
			}	

			//LOAD SERVICES INTO PAGE ITEMS ARRAY		
			if (rawJson.serviceList)
			{
				this.processItemsIntoFeatureList(rawJson.serviceList, 'service');			
			}

			//LOAD PROJECTS INTO PAGE ITEMS ARRAY		
			if (rawJson.projectList)
			{
				this.processItemsIntoFeatureList(rawJson.projectList, 'project');
			}	

			//LOAD PRODUCTION INTO PAGE ITEMS ARRAY		
			if (rawJson.mediaProductionShowList)
			{
				this.processItemsIntoFeatureList(rawJson.mediaProductionShowList, 'production');
			}		

			this.shuffleRandom(this.FeatureList);
		}	
	}

	private processItemsIntoFeatureList(sourceData: any[], type: string)
	{
		for (let entry of sourceData) 
		{
			this.FeatureList.push(CdfFactoryService.CreateCdfMediaModelFromJson(entry, type));
		}		
	}	

	private shuffleRandom(array) 
	{
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}	
}