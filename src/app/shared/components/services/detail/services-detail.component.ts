import
{
	Component,
	Input,
	NgZone,
	OnInit
} 								from '@angular/core';

import { ServicesDetailModel } 	from '../models/services-detail.model';
import { ServicesService } 		from '../services/services.service';
import { BreadcrumbService } 	from '../../../services/index';

@Component({
	selector: 'stm-services-detail',
	templateUrl: './services-detail.component.html',
	styleUrls: [ './services-detail.component.scss' ],
	providers: []
})	
export class ServicesDetailComponent implements OnInit
{
	@Input() serviceNodeId: string;
	
	PageData: ServicesDetailModel;

	constructor(
		private zone: NgZone,
		private servicesService: ServicesService,
		private breadcrumbService: BreadcrumbService
	) { }

	ngOnInit()
	{ 
		this.servicesService.GetServiceDetail(this.serviceNodeId).subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.PageData = data;

						//console.log('*********************** SERVICES DETAIL MODEL', this.PageData);

						//BREADCRUMB PAGE			
						this.breadcrumbService.PageName = this.PageData.Title;
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}
}