import
{ 
	CdfMediaModel,
	CdfRootModel
} 									from 'ng2-cdf/lib';

import
{ 
	CdfFactoryService
} 									from '../../../shared/index';

export class ServicesPageModel extends CdfRootModel
{
	Tagline: string;
	Subtagline: string;

	constructor(rawJson: any)
	{
		super(rawJson, ServicesPageModel.name);
		
		//CLOUD CMS DATA
		if (rawJson)
		{ 
			//Tagline
			if (rawJson.tagline)
			{ 
				this.Tagline = rawJson.tagline;
			}	

			//Subtagline
			if (rawJson.subTagline)
			{ 
				this.Subtagline = rawJson.subTagline;
			}	
		}	
	}		
}