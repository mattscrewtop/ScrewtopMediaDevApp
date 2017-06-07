import {
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';

import { ServicesPageModel } 		from '../models/services-page.model';
import { ServicesService } 			from '../services/services.service';

@Component({
	selector: 'stm-services-base',
	templateUrl: './services-base.component.html',
	styleUrls: [ './services-base.component.scss' ],
	providers: []
})
export class ServicesBaseComponent implements OnInit
{
	PageData: ServicesPageModel;
			
	constructor
	(
		private zone: NgZone,
		private servicesService: ServicesService,
	)
	{	
	}

	ngOnInit()
	{
		this.servicesService.GetPageData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('########### ABOUT-US PAGE DATA', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);		
	}
}