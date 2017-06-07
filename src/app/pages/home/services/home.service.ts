import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { HomeDesktopModel } 	from '../models/home-desktop.model';
import { HomeMobileModel } 		from '../models/home-mobile.model';
import { CdfFactoryService }	from '../../../shared/index';

@Injectable()
export class HomeService 
{
	private PageDesktopData: HomeDesktopModel;
	private PageMobileData: HomeMobileModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	
	GetHomePageDesktopData() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.PageDesktopData)
		{
			return Observable.create(observer => 
			{
				observer.next(this.PageDesktopData);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSHomeDesktopPageUrl();
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
							//console.log('********** HOME PAGE DESKTOP RAW JSON RECEIVED:', rawJson);

							this.PageDesktopData = new HomeDesktopModel(rawJson);
							
							observer.next(this.PageDesktopData);
							observer.complete();
						},						

						//ERROR
						err => 					
						{
							console.log('********** HOME PAGE DESKTOP DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};

	
	GetHomePageMobileData() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.PageMobileData)
		{
			return Observable.create(observer => 
			{
				observer.next(this.PageMobileData);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSHomeMobilePageUrl();
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
							//console.log('********** HOME PAGE MOBILE RAW JSON RECEIVED:', rawJson);

							this.PageMobileData = new HomeMobileModel(rawJson);
							
							observer.next(this.PageMobileData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** GET HOME PAGE DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};	
}