import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,	
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';
import { CdfMediaModel }		from '@titoagudelo/cdf-ng-media/lib';

import { environment } 			from '../../../../../environments/environment';
import { CdfFactoryService } 	from '../../../services/utilities/cdf-factory.service';

@Injectable()
export class NavigationService 
{
	private MediaModel: CdfMediaModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetNavFooterModel() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.MediaModel)
		{
			return Observable.create(observer => 
			{
				observer.next(this.MediaModel);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSFooterUrl();
			let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			requestModel.AddGetRequest(url);
						
			return Observable.create(observer => 
			{
				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							this.MediaModel =  CdfFactoryService.CreateCdfMediaModelFromJson(rawJson);
							
							observer.next(this.MediaModel);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** PROCESS DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};	
}
