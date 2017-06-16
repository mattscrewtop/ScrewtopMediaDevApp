import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../../environments/environment';
import { ProjectsDetailModel } 	from '../models/projects-detail.model';
import { ProjectsPageModel } 	from '../models/projects-page.model';
import { CdfFactoryService } 	from '../../../services/index';

@Injectable()
export class ProjectsService
{
	private ProjectsPageModel: ProjectsPageModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

	GetProjectsList() : Observable<any>
	{
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.ProjectsPageModel)
		{
			return Observable.create(observer =>
			{
				observer.next(this.ProjectsPageModel);
				observer.complete();
			});
		}
		else
		{
			let url: string = CdfFactoryService.GetCloudCMSProjectsPageUrl();
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
							//console.log('**********PROJECTS RAW JSON RECEIVED:', rawJson);

							this.ProjectsPageModel = new ProjectsPageModel(rawJson);

							observer.next(this.ProjectsPageModel);
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

	GetProjectDetail(projectNodeId: string) : Observable<any>
	{
		let url: string = CdfFactoryService.BuildCloudCmsUrlForNodeId(projectNodeId);
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
						//console.log('**********PROJECT DETAIL RAW JSON RECEIVED:', rawJson);

						observer.next(new ProjectsDetailModel(rawJson));
						observer.complete();
					},

					//ERROR
					err =>
					{
						console.log('********** PROJECT DATA ERROR:', err.message);
					},

					//ON COMPLETE
					() => null
				)
		});
	};
}
