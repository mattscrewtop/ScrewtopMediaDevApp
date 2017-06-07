import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { ContactUsPageModel } 	from '../models/contact-us-page.model';
import { CdfFactoryService }	from '../../../shared/index';
import { CdfContactUsFormModel } from '@cdf/cdf-ng-contact-us-form/lib/models';

@Injectable()
export class ContactUsService 
{
	private PageData: ContactUsPageModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
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
			let url: string = CdfFactoryService.GetCloudCMSContactUsPageUrl();
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
							//console.log('CONTACT US PAGE CONTENT RECEIVED:', rawJson);

							this.PageData = new ContactUsPageModel(rawJson);
							
							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** CONTACT-US PAGE DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};

	//SEND FORM TO SERVER FOR SUBMISSION...	
	SendEmail(formModel: CdfContactUsFormModel): Observable<any>
	{ 
		return Observable.create(observer => 
		{
			observer.next(formModel);
			observer.complete();
		});	
	}
}