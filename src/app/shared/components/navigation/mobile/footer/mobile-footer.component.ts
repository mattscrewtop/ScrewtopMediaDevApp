import { Component, OnInit, Input } 	from '@angular/core';
import { Location } 					from '@angular/common';

@Component({
	selector: 'stm-mobile-footer',
	templateUrl: './mobile-footer.component.html',
	styleUrls: [ './mobile-footer.component.scss' ],
	providers: []
})
export class MobileFooterComponent implements OnInit 
{	
	constructor(private location: Location)
	{
	}

	ngOnInit()
	{
	}

	GoBack()
	{ 
	}
}