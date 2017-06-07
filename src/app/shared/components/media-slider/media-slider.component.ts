import
{
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} 								from '@angular/core';
import { CdfMediaModel } 		from '@cdf/cdf-ng-media/lib';

@Component({
	selector: 'stm-media-slider',
	templateUrl: './media-slider.component.html',
	styleUrls: [ './media-slider.component.scss' ],
	providers: []
})
export class MediaSliderComponent implements OnInit 
{
	@Input() mediaModelList: CdfMediaModel[] = [];
	@Input() showType: boolean = false;
	@Input() showTitle: boolean = false;
	@Input() showDescription: boolean = false;
	@Output() onMediaClick: EventEmitter<any> = new EventEmitter<any>();
	
	constructor()
	{
	};

	ngOnInit()
	{
	};	

	private doMediaClick(mediaModel: CdfMediaModel)
	{
		if (this.onMediaClick)
		{				
			this.onMediaClick.emit(mediaModel);
		}
	};	
}