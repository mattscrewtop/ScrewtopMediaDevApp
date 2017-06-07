import { Injectable }      		from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import { Subject} 				from 'rxjs/Subject';

@Injectable()
export class EventService 
{
	// Observable source
	private EventSubject: Subject<string> = new Subject<string>();

	// Observable stream
	eventObservable = this.EventSubject.asObservable();

	// service command
	public EventJustHappened(eventName: string) 
	{
		//NOTIFY OBSERVERS WHEN EVENT IS SET
		this.EventSubject.next(eventName);
	}
}