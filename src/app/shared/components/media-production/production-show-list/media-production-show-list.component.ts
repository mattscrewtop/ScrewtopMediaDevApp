import { Component, OnInit, Input, NgZone } 	from '@angular/core';

import { MediaProductionShowModel }				from '../models/media-production-show.model';
import { MediaProductionService } 				from '../services/media-productions.service';

@Component({
	selector: 'stm-media-production-show-list',
	templateUrl: './media-production-show-list.component.html',
	styleUrls: [ './media-production-show-list.component.scss' ],
	providers: []
})
export class MediaProductionShowListComponent implements OnInit 
{	
	ShowList: MediaProductionShowModel[] = [];
	
	@Input()
	mediaProductionId: number;
	
	constructor(
		private zone: NgZone,
		private mediaProductionService: MediaProductionService
	)
	{
	}
	
	ngOnInit()
	{			
		this.mediaProductionService.GetMediaProductionShowList(this.mediaProductionId).subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.ShowList = data;

						//console.log('*********************** MEDIA PRODUCTION SHOW LIST MODEL', this.ShowList);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	};
	
	onMediaProductionShowClick(item)
	{
		
	};
}