import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-comp2',
	template: `MyComponent 2`,
	styleUrls: [],
	providers: []
})	
export class MyComponent2 implements OnInit 
{
	constructor() { }

	ngOnInit()
	{ 
		console.log('MyComponent2');
	}
}