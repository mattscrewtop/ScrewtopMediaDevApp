import { Router } 						from '@angular/router';
import { Component, OnInit, Input } 	from '@angular/core';

@Component({
	selector: 'stm-desktop-header',
	templateUrl: './desktop-header.component.html',
	styleUrls: [ './desktop-header.component.scss' ],
	providers: []
})
export class DesktopHeaderComponent implements OnInit 
{
	@Input() title: string;
	@Input() isHomeInView: boolean;
	@Input() isServicesInView: boolean;
	@Input() isProjectsInView: boolean;
	@Input() isProcessInView: boolean;
	@Input() isProductionsInView: boolean;
		
	constructor()
	{
	}

	ngOnInit()
	{
	}

	onNavItemCicked()
	{ 
		//NOTIFY DESKTOP PARENT COMPONENT OF HERO MEDIA FEATURE FROM CMS...
		//this.NotifyNavItemClicked.emit(true);	
	}	
}