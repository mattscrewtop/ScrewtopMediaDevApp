import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { ProcessPageModel } 	from '../models/process-page.model';
import { CdfFactoryService } 	from '../../../services/index';

@Injectable()
export class ProcessService 
{
	private ProcessPageModel: ProcessPageModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetProcessList() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.ProcessPageModel)
		{
			return Observable.create(observer => 
			{
				observer.next(this.ProcessPageModel);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSProcessPageUrl();
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
							//console.log('**********PROCESS RAW JSON RECEIVED:', rawJson);

							this.ProcessPageModel = new ProcessPageModel(rawJson);
							
							observer.next(this.ProcessPageModel);
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