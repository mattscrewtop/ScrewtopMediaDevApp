import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { CdfFactoryService } 	from '../utilities/cdf-factory.service';

@Injectable()
export class DataService
{
	private SocialMediaList: any;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetSocialMediaList() : Observable<any>
	{
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.SocialMediaList)
		{
			return Observable.create(observer =>
			{
				observer.next(this.SocialMediaList);
				observer.complete();
			});
		}
		else
		{
			return Observable.create(observer =>
			{
				let queryParams = 'limit=-1&metadata=false&full=true&sort={"title":1}';
				let body: Object = { "_type": "type:social-media" };
				let url: string = CdfFactoryService.BuildCloudCMSUrlWithQueryParams(queryParams);
				let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
				requestModel.AddPostRequest(url, body);

				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							this.SocialMediaList = rawJson;

							observer.next(this.SocialMediaList);
							observer.complete();
						},

						//ERROR
						err =>
						{
							console.log('********** GET SOCIAL MEDIA LIST ERROR:', err.message);
						},

						//ON COMPLETE
						() => null
					)
			});
		}
	};
}
