import { Injectable } 		from '@angular/core';

import { environment } 		from '../../../../environments/environment';
import { CdfConfigModel } 	from 'ng2-cdf/lib';

@Injectable()
export class ConfigService 
{
	/*
	CREATE PROPER CONFIGURATION FOR CONTENT DELIVERY FRAMEWORK (CDF)
	BASED ON REGISTERED DOMAIN'S IN ENVIRONMENT'S Domain_Credentials NODE
	*/
	public static GetDomainCredentials() : CdfConfigModel[]
	{ 
		let configArray: CdfConfigModel[] = [];

		//FIND CONFIG IN LIST WITH SAME DOMAIN NAME
		for (let entry of environment.Domain_Credentials) 
		{
			let domainName = (entry.Domain) ? entry.Domain : undefined;

			if (domainName)
			{ 
				configArray.push(entry);
			}	
		}

		//console.log('configArray:', configArray);
		
		return configArray;
	}	
}