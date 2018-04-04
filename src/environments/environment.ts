// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment =
	{
		production: false,
		envName: 'dev',
		name: 'Screwtop Media',
		version: '3.1.1',
		JW_PLAYER:
		{
			key: 'wNPiCrI15qDzPs7fkSNfvlMlvxwVXL5ZnCE7dg=='
		},
		SOCIAL_MEDIA:
		{
			Facebook: 'Facebook',
			Twitter: 'Twitter',
			LinkedIn: 'LinkedIn',
			Instagram: 'Instagram',
			GooglePlus: 'GooglePlus',
			YouTube: 'YouTube',
			RSS: 'RSS',
			Snapchat: 'Snapchat'
		},
		CLOUD_CMS:
		{
			ROOT_URL: 'https://api.cloudcms.com',
			RepositoryId: '0fdddfe701d019e22471',
			BranchId: 'c27456c5add2b76e6f5a',
			MEDIA_URL: 'https://a022bcec-0c8d-4f5d-b4ad-338c24b49149-hosted.cloudcms.net/static/node',
			Content:
			{
				AboutUsPage: 'ba946c602374a7e0ee84',
				ContactUsPage: '808f011bb7fca45ca38c',
				Footer: '5044a25e984f58dde255',
				HomeMobilePage: 'b660ecd5aa0bcf5de8dd',
				HomeDesktopPage: 'e93cf5841ef3b5dcfb44',
				HomeAboutUsPage: '14f50e66751709d789b1',
				ServiceListPage: '6d8e5403afb75fe9ad16',
				ProjectListPage: '3cb20b6e7145a6c003c2',
				SixStepProcessPage: '72772fb7e18c28d7aa7b',
				MediaProductionListPage: 'f2a7a044df6f398a3d7f',
				SpotlightPage: '6442e7a0538485ba1af8'
			}
		},
		CDF_API:
		{
			ROOT_URL: 'https://cdf-api-local.webapi.cdf.cloud/api/',
			ApplicationKey: "a8108d99-e3b2-4a60-bfce-9983fc822928",
			Content:
			{
			}
		}
	};
