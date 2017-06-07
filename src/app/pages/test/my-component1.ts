import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'my-comp1',
	template: `MyComponent 1: {{SomeInput}}`,
	styleUrls: [],
	providers: []
})	
export class MyComponent1 implements OnInit 
{
	constructor() { }

	@Input() SomeInput:string;

	ngOnInit()
	{ 
		console.log('MyComponent1 INPUT YO:', this.SomeInput);
	}
}