import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { MediaProductionPageModel } from '../models/media-production-page.model';
import { MediaProductionShowModel } from '../models/media-production-show.model';
import { MediaProductionModel } 	from '../models/media-production.model';
import { CdfFactoryService } 	from '../../../services/index';

@Injectable()
export class MediaProductionService 
{
	private MediaProductionPageModel: MediaProductionPageModel;
	private ShowList: MediaProductionShowModel[];
	
	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetMediaProductionList() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.MediaProductionPageModel)
		{
			return Observable.create(observer => 
			{
				observer.next(this.MediaProductionPageModel);
				observer.complete();
			});
		}
		else
		{ 
			let url: string = CdfFactoryService.GetCloudCMSMediaProductionListPageUrl();
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
							//console.log('********** MEDIA PRODUCTION LIST RAW JSON RECEIVED:', rawJson);

							this.MediaProductionPageModel = new MediaProductionPageModel(rawJson);
							
							observer.next(this.MediaProductionPageModel);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** MEDIA PRODUCTION LIST DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};

	
	GetMediaProductionDetail(mediaProductionNodeId: string) : Observable<any> 
	{ 
		let url: string = CdfFactoryService.BuildCloudCmsUrlForNodeId(mediaProductionNodeId);
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
						//console.log('**********MEDIA PRODUCTION DETAIL RAW JSON RECEIVED:', rawJson);

						observer.next(new MediaProductionModel(rawJson));
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

	
	GetMediaProductionShowList(mediaProductionId:number) : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.ShowList)
		{
			return Observable.create(observer => 
			{
				observer.next(this.ShowList);
				observer.complete();
			});
		}
		else
		{ 
			let queryParams = 'limit=3&metadata=false&full=true'
			let body: Object = { "_type": "stm:media-production-show", "mediaProduction.id": mediaProductionId };
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
							//console.log('********** MEDIA PRODUCTION SHOW LIST RAW JSON RECEIVED:', rawJson);

							this.ShowList = [];

							for (let entry of rawJson.rows) 
							{
								this.ShowList.push(new MediaProductionShowModel(entry));
							}							
							
							observer.next(this.ShowList);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** MEDIA PRODUCTION SHOW LIST DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};	
}