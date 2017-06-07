import
{
	Component,
	OnInit,
	HostListener,
	Input
} 									from '@angular/core';


const Slideout = require('../../../../../../assets/lib/slideout/slideout.min.js');

@Component({
	selector: 'stm-mobile-header',
	templateUrl: './mobile-header.component.html',
	styleUrls: [ './mobile-header.component.scss' ],
	providers: []	
})
export class MobileHeaderComponent implements OnInit 
{
	@Input()
	title: string;
	slideout: any;

	constructor()
	{

	}

	ngOnInit()
	{
		this.slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'tolerance': 70,
			'fx': 'ease-in-out',
			'transform': 'scale(.5, .5)'
		});		
	}

	onNotifyNavItemClicked()
	{ 
		this.slideout.toggle();
	}
}