import { Injectable } 						from '@angular/core';
import { CdfMediaModel, CdfVideoModel } 	from '@cdf/cdf-ng-media/lib';

import { environment } 						from '../../../../environments/environment';

@Injectable()
export class CdfFactoryService
{
	//CONSTRUCT URL FOR CLOUD CMS HOME PAGE...
	public static GetCloudCMSHomeDesktopPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.HomeDesktopPage);
	};

	public static GetCloudCMSHomeMobilePageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.HomeMobilePage);
	};

	//CONSTRUCT URL FOR CLOUD CMS ABOUT US PAGE...
	public static GetCloudCMSAboutUsPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.AboutUsPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS CONTACT US PAGE...
	public static GetCloudCMSContactUsPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.ContactUsPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS SERVICES PAGE...
	public static GetCloudCMSServicesPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.ServiceListPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS PROJECTS PAGE...
	public static GetCloudCMSProjectsPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.ProjectListPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS PROCESS PAGE...
	public static GetCloudCMSProcessPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.SixStepProcessPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS MEDIA PRODUCTION LIST PAGE...
	public static GetCloudCMSMediaProductionListPageUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.MediaProductionListPage);
	};

	//CONSTRUCT URL FOR CLOUD CMS FOOTER...
	public static GetCloudCMSFooterUrl() : string
	{
		return CdfFactoryService.BuildCloudCmsUrlForNodeId(environment.CLOUD_CMS.Content.Footer);
	};



	/*------------------------------------------------------------------------------------------------
	CDF UTILITY HELPERS
	------------------------------------------------------------------------------------------------*/
	public static BuildCloudCmsUrlForNodeId(nodeId: string) : string
	{
		return CdfFactoryService.constructCloudCmsUrl(nodeId);
	};

	public static BuildCloudCMSUrlWithQueryParams(queryParams: string) : string
	{
		//queryParams example:  "limit=-1&metadata=false&full=true&sort=%7B%22step%22%3A1%7D"
		//queryParams example:  "limit=3&metadata=false&full=true"

		let url = CdfFactoryService.constructCloudCmsUrl('query');

		return (queryParams) ? url + '?' + encodeURI(queryParams) : url;
	};

	public static CreateCdfMediaModelFromJson(rawJson:any, type?:string): CdfMediaModel
	{
		let id: string = undefined;
		let title: string = undefined;
		let description: string = undefined;
		let imageUri: string = undefined;
		let youTubeId: string = undefined;
		let videoList: CdfVideoModel[] = undefined;

		if (rawJson)
		{
			//NODE Id
			if (rawJson._doc)
			{
				id = rawJson._doc;
			}
			//NODE Id
			else if (rawJson.id)
			{
				id = rawJson.id;
			}

			//TITLE
			if (rawJson.title)
			{
				title = rawJson.title;
			}

			//DESCRIPTION
			if (rawJson.description)
			{
				description = rawJson.description;
			}

			//ImageId - VERSION 1
			if (rawJson && rawJson.media && rawJson.media.image && rawJson.media.image.id)
			{
				imageUri = CdfFactoryService.constructCloudCMSMediaUrl(rawJson.media.image.id);
			}
			//ImageId - VERSION 2
			else if (rawJson.image && rawJson.image.id)
			{
				imageUri = CdfFactoryService.constructCloudCMSMediaUrl(rawJson.image.id);
			}
			//ImageId - VERSION 3
			else if (rawJson && rawJson.id)
			{
				imageUri = CdfFactoryService.constructCloudCMSMediaUrl(rawJson.id);
			}

			//YouTubeId
			if (rawJson.youTubeId)
			{
				youTubeId = rawJson.youTubeId;
			}

			//VIDEO
			if (rawJson && rawJson.videoList)
			{
				videoList = [];

				for (let entry of rawJson.videoList)
				{
					if (entry && entry.video && entry.video.id)
					{
						let videoUri = CdfFactoryService.constructCloudCMSMediaUrl(entry.video.id);
						videoList.push(new CdfVideoModel(videoUri));
					}
				}
			}
		}

		return new CdfMediaModel(id, type, title, description, imageUri, youTubeId, videoList);
	};


	private static constructCloudCmsUrl(nodeId: string) : string
	{
		let rootUrl = environment.CLOUD_CMS.ROOT_URL;
		let repositoryId = environment.CLOUD_CMS.RepositoryId;
		let branchId = environment.CLOUD_CMS.BranchId;

		return rootUrl + '/repositories/' + repositoryId + '/branches/' + branchId + '/nodes/' + nodeId;
	};

	private static constructCloudCMSMediaUrl(nodeId: string): string
	{
		let mediaUrl = environment.CLOUD_CMS.MEDIA_URL;
		let branchId = environment.CLOUD_CMS.BranchId;

		return mediaUrl + '/' + nodeId + '?branchId=' + branchId;
	};
}
