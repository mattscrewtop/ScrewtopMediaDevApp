import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';
import { CdfMediaModel } 		from '@titoagudelo/cdf-ng-media/lib';

import { ServicesPageModel } 	from '../models/services-page.model';
import { ServicesService } 		from '../services/services.service';
import { NavigationService } 	from '../../../services/index';

@Component({
	selector: 'stm-services-list-name',
	templateUrl: './services-list-name.component.html',
	styleUrls: [ './services-list-name.component.scss' ],
	providers: []
})
export class ServicesListNameComponent implements OnInit
{
	ServicesPageModel: ServicesPageModel;

	constructor(
		private zone: NgZone,
		private servicesService: ServicesService,
		private navigationService: NavigationService
	) { }

	ngOnInit()
	{
		this.servicesService.GetServicesList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.ServicesPageModel = data;

						//console.log('*********************** SERVICES MODEL', this.ServicesPageModel);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}

	private onServiceItemCicked(mediaModel: CdfMediaModel)
	{
		this.navigationService.GoToServiceDetailPage(mediaModel.Id);
	}
}
