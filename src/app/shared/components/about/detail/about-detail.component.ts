import
{
	Component,
	Input,
	NgZone,
	OnInit
} 								from '@angular/core';

import { AboutDetailModel } 	from '../models/about-detail.model';
import { AboutService } 		from '../services/about.service';

@Component({
	selector: 'stm-about-detail',
	templateUrl: './about-detail.component.html',
	styleUrls: [ './about-detail.component.scss' ],
	providers: []
})
export class AboutDetailComponent implements OnInit
{
	PageData: AboutDetailModel;

	constructor(
		private zone: NgZone,
		private aboutService: AboutService,
	) { }

	ngOnInit()
	{
		this.aboutService.GetPageData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('*********************** PROJECTS DETAIL MODEL', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}
}
