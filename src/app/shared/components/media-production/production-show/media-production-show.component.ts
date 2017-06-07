import { Component, OnInit, Input } 		from '@angular/core';

import { MediaProductionModel } 			from '../models/media-production.model';

@Component({
	selector: 'stm-media-production-show',
	templateUrl: './media-production-show.component.html',
	styleUrls: [ './media-production-show.component.scss' ],
	providers: []
})
export class MediaProductionShowComponent implements OnInit 
{
	@Input() mediaProduction: MediaProductionModel;
	
	constructor()
	{
	}

	
	ngOnInit()
	{	
		//console.log('MEDIA PRODUCTION:', this.mediaProduction);
	}

	
	onMediaProductionListClick(item)
	{
	}
}