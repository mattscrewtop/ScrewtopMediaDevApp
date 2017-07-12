import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';
import { CdfMediaModel } 		from '@titoagudelo/cdf-ng-media/lib';

import { HomeMobileModel } 		from '../models/home-mobile.model';
import { HomeService } 			from '../services/home.service';
import { NavigationService }	from '../../../shared/services/index';

@Component({
	selector: 'stm-home-mobile',
	templateUrl: './home-mobile.component.html',
	styleUrls: [ './home-mobile.component.scss' ],
	providers: []
})
export class HomeMobileComponent implements OnInit 
{
	PageData: HomeMobileModel;

	constructor(
		private zone: NgZone,
		private homeService: HomeService,
		private navigationService: NavigationService
	)
	{
	}

	ngOnInit() 
	{
		this.homeService.GetHomePageMobileData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.PageData = data;
						
						//console.log('########### HOME PAGE MOBILE DATA', this.PageData);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);		
	}

	onMediaClick(mediaModel: CdfMediaModel)
	{ 			
		this.navigationService.GoToMediaDetailPage(mediaModel);
	}
}
