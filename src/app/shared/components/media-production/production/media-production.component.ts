import
{
	Component,
	Input,
	NgZone,
	OnInit
} 									from '@angular/core';

import { BreadcrumbService } 		from '../../../services/index';
import { NavigationService } 		from '../../../services/index';
import { MediaProductionService } 	from '../services/media-productions.service';
import { MediaProductionModel } 	from '../models/media-production.model';

@Component({
	selector: 'stm-media-production',
	templateUrl: './media-production.component.html',
	styleUrls: [ './media-production.component.scss' ],
	providers: []
})
export class MediaProductionComponent implements OnInit 
{
	@Input() mediaProduction: MediaProductionModel;
	@Input() mediaProductionNodeId: string;
	
	
	constructor(
		private zone: NgZone,
		private breadcrumbService: BreadcrumbService,
		private navigationService : NavigationService,
		private mediaProductionService: MediaProductionService
	) 
	{ }
	
	ngOnInit()
	{	
		if(this.mediaProductionNodeId)
		{
			this.mediaProductionService.GetMediaProductionDetail(this.mediaProductionNodeId).subscribe
				(
					//SUCCESS
					data =>
					{
						this.zone.run(() =>
						{ 	// Change the property within the zone, CD will run after
							
							this.mediaProduction = data;

							//console.log('*********************** MEDIA PRODUCTION DETAIL MODEL', this.mediaProduction);

							//BREADCRUMB PAGE			
							this.breadcrumbService.PageName = this.mediaProduction.Title;
						});	
						
					},
						
					//ON ERROR
					() => null,

					//ON COMPLETE
					() => null	
				);
		}
	}
}