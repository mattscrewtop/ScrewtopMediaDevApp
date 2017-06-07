import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfRequestModel,
	CdfDataHelperService
} 								from 'ng2-cdf/lib';

import { ServicesPageModel } 		from '../models/services-page.model';
import { CdfFactoryService }	from '../../../shared/index';

@Injectable()
export class ServicesService 
{
	private RequestModel: CdfRequestModel;
	private PageData: ServicesPageModel;

	constructor(
		private cdfDataHelperService : CdfDataHelperService
	)
	{
		this.RequestModel = new CdfRequestModel();

		// let cloudCmsPageUrl = CdfFactoryService.GetCloudCMSServicesPageUrl();
		
		// //LIST OF GETS FOR DATA ISLAND		
		// this.RequestModel.GetList =
		// 	[			
		// 		cloudCmsPageUrl
		// 	];		
	}

	GetPageData() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.PageData)
		{
			return Observable.create(observer => 
			{
				observer.next(this.PageData);
				observer.complete();
			});
		}
		else
		{ 
			return Observable.create(observer => 
			{
				this.cdfDataHelperService.requestData(this.RequestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							//console.log('SERVICES PAGE CONTENT RECEIVED:', rawJson);

							this.PageData = new ServicesPageModel(rawJson);
							
							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** SERVICES PAGE DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};
}