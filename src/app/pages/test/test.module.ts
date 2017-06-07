import { NgModule }					from '@angular/core';

import { MyComponent1 }				from './my-component1';
import { MyComponent2 }				from './my-component2';
import { TestComponent }			from './test.component';
import { routing }					from './test.routing';

@NgModule({
	imports:
	[
		routing		
	],
	declarations:
	[
		TestComponent,
		MyComponent1,
		MyComponent2
	],
	exports:
	[
		TestComponent,
		MyComponent1,
		MyComponent2
	],
	entryComponents:
	[
		TestComponent,
		MyComponent1,
		MyComponent2
	],
	providers:
	[
	]
})
export class TestModule {}