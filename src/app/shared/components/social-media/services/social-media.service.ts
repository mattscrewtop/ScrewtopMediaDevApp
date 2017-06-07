import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { CdfFactoryService } 	from '../../../services/utilities/cdf-factory.service';
import { SocialMediaModel } 	from '../models/social-media.model';

@Injectable()
export class SocialMediaService
{
	private SocialMediaList: SocialMediaModel[];

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
				let body: Object = { "_type": "stm:social-media" };
				let url: string = CdfFactoryService.BuildCloudCMSUrlWithQueryParams(queryParams);
				let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
				requestModel.AddPostRequest(url, body);

				this.SocialMediaList = [];

				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							//console.log('********** SOCIAL MEDIA RAW JSON:', rawJson);

							//SOCIAL MEDIA LIST
							for (let entry of rawJson.rows)
							{
								this.SocialMediaList.push(new SocialMediaModel(entry));
							}

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
