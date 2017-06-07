import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { CdfFactoryService } 	from '../../../services/utilities/cdf-factory.service';
import { PhoneNumberModel } 	from '../models/phone-number.model';

@Injectable()
export class PhoneNumberService
{
	private PhoneNumberList: PhoneNumberModel[];

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetPhoneNumberList() : Observable<any>
	{
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.PhoneNumberList)
		{
			return Observable.create(observer =>
			{
				observer.next(this.PhoneNumberList);
				observer.complete();
			});
		}
		else
		{
			this.PhoneNumberList = [];

			let queryParams = 'limit=-1&metadata=false&full=true&sort={"title":1}';
			let body: Object = { "_type": "stm:phone-number" };
			let url: string = CdfFactoryService.BuildCloudCMSUrlWithQueryParams(queryParams);
			let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			requestModel.AddPostRequest(url, body);

			return Observable.create(observer =>
			{
				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							//console.log('********** PHONE NUMBER RAW JSON:', rawJson);

							//SOCIAL MEDIA LIST
							for (let entry of rawJson.rows)
							{
								this.PhoneNumberList.push(new PhoneNumberModel(entry));
							}

							observer.next(this.PhoneNumberList);
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
