import {
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';

import { AboutUsPageModel } 		from '../models/about-us-page.model';
import { AboutUsService } 			from '../services/about-us.service';

@Component({
	selector: 'stm-about-us-base',
	templateUrl: './about-us-base.component.html',
	styleUrls: [ './about-us-base.component.scss' ],
	providers: []
})
export class AboutUsBaseComponent implements OnInit
{
	PageData: AboutUsPageModel;

	constructor
	(
		private zone: NgZone,
		private aboutUsService: AboutUsService,
	)
	{	
	}

	ngOnInit()
	{
		this.aboutUsService.GetPageData().subscribe
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