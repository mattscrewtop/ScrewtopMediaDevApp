import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { CdfFactoryService } 	from '../../../services/utilities/cdf-factory.service';
import { AddressModel } 		from '../models/address.model';

@Injectable()
export class AddressService
{
	private AddressList: AddressModel[];

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetAddressList() : Observable<any>
	{
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.AddressList)
		{
			return Observable.create(observer =>
			{
				observer.next(this.AddressList);
				observer.complete();
			});
		}
		else
		{
			this.AddressList = [];

			let queryParams = 'limit=-1&metadata=false&full=true&sort={"title":1}';
			let body: Object = { "_type": "stm:address" };
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
							//console.log('********** ADDRESS RAW JSON:', rawJson);

							//ADDRESS LIST
							for (let entry of rawJson.rows)
							{
								this.AddressList.push(new AddressModel(entry));
							}

							observer.next(this.AddressList);
							observer.complete();
						},

						//ERROR
						err =>
						{
							console.log('********** GET ADDRESS LIST ERROR:', err.message);
						},

						//ON COMPLETE
						() => null
					)
			});
		}
	};
}
