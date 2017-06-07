import
{
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} 									from '@angular/core';

@Component({
	selector: 'stm-nav',
	templateUrl: './nav.component.html',
	styleUrls: [ './nav.component.scss' ],
	providers: []	
})
export class NavComponent implements OnInit 
{
	@Input() IsLogoVisible: boolean = false;		
	@Output() NotifyNavItemClicked = new EventEmitter<boolean>();

	constructor()
	{

	}

	ngOnInit()
	{
	}

	onNavItemCicked()
	{ 
		//NOTIFY DESKTOP PARENT COMPONENT OF HERO MEDIA FEATURE FROM CMS...
		this.NotifyNavItemClicked.emit(true);	
	}
}