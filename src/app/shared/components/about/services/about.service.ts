import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { AboutDetailModel } 	from '../models/about-detail.model';
import { CdfFactoryService }	from '../../../index';

@Injectable()
export class AboutService
{
	private PageData: AboutDetailModel;

	constructor(
		private cdfDataService : CdfDataService
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
			let url: string = CdfFactoryService.GetCloudCMSHomeAboutUsPageUrl();
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
							//console.log('ABOUT-US PAGE CONTENT RECEIVED:', rawJson);

							this.PageData = new AboutDetailModel(rawJson);

							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err =>
						{
							console.log('********** ABOUT-US PAGE DATA ERROR:', err.message);
						},

						//ON COMPLETE
						() => null
					)
			});
		}
	};
}
