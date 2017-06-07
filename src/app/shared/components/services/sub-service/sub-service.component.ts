import
{
	Component,
	OnInit,
	Input
} 								from '@angular/core';

import { SubServiceModel } 	from '../models/sub-service-detail.model';
import { environment } 			from '../../../../../environments/environment';

@Component({
	selector: 'stm-sub-services-detail',
	templateUrl: './sub-service.component.html',
	styleUrls: [ './sub-service.component.scss' ],
	providers: []
})
export class SubServiceDetailComponent implements OnInit
{
	@Input() subService: SubServiceModel;

	socialMediaTypeClass: string;

	constructor()
	{
	};

	ngOnInit()
	{
		console.log(this.subService);
	};
}
