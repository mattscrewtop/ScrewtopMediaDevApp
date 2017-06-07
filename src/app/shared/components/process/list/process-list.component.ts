import
{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { ProcessPageModel } 	from '../models/process-page.model';
import { ProcessService } 		from '../services/process.service';

@Component({
	selector: 'stm-process-list',
	templateUrl: './process-list.component.html',
	styleUrls: [ './process-list.component.scss' ],
	providers: []
})	
export class ProcessListComponent implements OnInit
{
	ProcessPageModel: ProcessPageModel;

	constructor(
		private zone: NgZone,
		private processService: ProcessService		
	) { }

	ngOnInit()
	{ 
		this.processService.GetProcessList().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.ProcessPageModel = data;

						//console.log('*********************** PROCESS MODEL', this.ProcessPageModel);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);	
	}
}