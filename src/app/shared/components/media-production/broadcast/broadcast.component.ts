import { Component, OnInit, Input } 	from '@angular/core';

import { BroadcastModel } 				from '../models/broadcast.model';

@Component({
	selector: 'stm-broadcast',
	templateUrl: './broadcast.component.html',
	styleUrls: [ './broadcast.component.scss' ],
	providers: [ ]
})
export class BroadcastComponent implements OnInit
{
	@Input()
	BroadcastModel: BroadcastModel;
	
	constructor()
	{
	}

	ngOnInit() 
	{
	}
}