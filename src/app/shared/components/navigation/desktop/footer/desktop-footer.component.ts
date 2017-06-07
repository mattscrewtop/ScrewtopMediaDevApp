import
{
	Component,
	NgZone,
	OnInit
} 									from '@angular/core';
import { CdfRequestModel } 			from '@cdf/cdf-ng/lib';
import { CdfMediaModel }			from '@cdf/cdf-ng-media/lib';

import { environment } 				from '../../../../../../environments/environment';
import { NavigationService } 		from '../../services/navigation.service';

@Component({
	selector: 'stm-desktop-footer',
	templateUrl: './desktop-footer.component.html',
	styleUrls: [ './desktop-footer.component.scss' ],
	providers: []
})
export class DesktopFooterComponent implements OnInit 
{	
	NavFooterMediaModel: CdfMediaModel;
	SiteNameAndVersion: string;	
	
    constructor(
		private zone: NgZone,
		private navigationService: NavigationService
	) 
	{
    }

	ngOnInit()
	{	
		this.navigationService.GetNavFooterModel().subscribe
			(
				//SUCCESS
				(data : CdfMediaModel) =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.NavFooterMediaModel = data;

						//console.log('***  NAV FOOTER DATA:', this.NavFooterData);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);

		this.SiteNameAndVersion = environment.name + ' - ' + environment.version;
	};
}