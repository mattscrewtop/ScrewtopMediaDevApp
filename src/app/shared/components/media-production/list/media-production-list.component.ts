import
{
	Component,
	NgZone,
	OnInit
} 									from '@angular/core';

import { MediaProductionPageModel } from '../models/media-production-page.model';
import { MediaProductionService } 	from '../services/media-productions.service';

@Component({
	selector: 'stm-media-production-list',
	templateUrl: './media-production-list.component.html',
	styleUrls: [ './media-production-list.component.scss' ],
	providers: []
})
export class MediaProductionListComponent implements OnInit 
{	
	PageModel: MediaProductionPageModel;

	constructor(
		private zone: NgZone,
		private mediaProductionService: MediaProductionService		
	) { }

	ngOnInit()
	{ 
		this.mediaProductionService.GetMediaProductionList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.PageModel = data;

						//console.log('*********************** MEDIA PRODUCTION LIST MODEL', this.PageModel);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}	
}