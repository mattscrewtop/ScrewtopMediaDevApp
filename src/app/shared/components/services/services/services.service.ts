import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { ServicesDetailModel } 	from '../models/services-detail.model';
import { ServicesPageModel } 	from '../models/services-page.model';
import { CdfFactoryService } 	from '../../../services/index';

@Injectable()
export class ServicesService 
{
	private ServicesPageModel: ServicesPageModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	
	GetServicesList() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.ServicesPageModel)
		{
			return Observable.create(observer => 
			{
				observer.next(this.ServicesPageModel);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSServicesPageUrl();
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
							//console.log('**********SERVICES RAW JSON RECEIVED:', rawJson);

							this.ServicesPageModel = new ServicesPageModel(rawJson);
							
							observer.next(this.ServicesPageModel);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** SERVICES DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};

	
	GetServiceDetail(serviceNodeId: string) : Observable<any> 
	{ 
		let url: string = CdfFactoryService.BuildCloudCmsUrlForNodeId(serviceNodeId);
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
						//console.log('**********SERVICES DETAIL RAW JSON RECEIVED:', rawJson);

						observer.next(new ServicesDetailModel(rawJson));
						observer.complete();
					},

					//ERROR
					err => 					
					{
						console.log('********** SERVICES DATA ERROR:', err.message);	
					},

					//ON COMPLETE
					() => null
				)	
		});
	};		
}