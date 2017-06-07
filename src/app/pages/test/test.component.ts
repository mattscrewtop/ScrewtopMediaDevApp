import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'stm-test',
	templateUrl: './test.component.html',
	styleUrls: [],
	providers: []
})	
export class TestComponent implements OnInit 
{
	constructor() { }

	ngOnInit()
	{ 
		console.log('TestComponent ON INIT...');
	}
}