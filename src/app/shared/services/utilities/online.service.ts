import { Injectable } 		from '@angular/core';
import { BehaviorSubject } 	from 'rxjs/BehaviorSubject';
import { Observable } 		from 'rxjs/Rx';

@Injectable()
export class OnlineService 
{
	private isOnline = new BehaviorSubject<boolean>(false);
	
	// Observable 'IsLoading' stream
	//subscribers are notified when isLoading changes
	IsOnlineStream = this.isOnline.asObservable();

	constructor()
	{
		let that = this;
		let interval = 1000;
		let timeOuts = []; 

		if ('onLine' in navigator) 
		{
			(function checkStatus() 
			{
				timeOuts["uniqueId"] = setTimeout
				(
					function () 
					{
						//console.log('IS ONLINE:', navigator.onLine);
						that.isOnline.next(navigator.onLine);

						clearTimeout(timeOuts["uniqueId"]);
						//checkStatus();
										    // code here

					    //let videotag = document.getElementsByClassName("jw-video jw-reset");

					    //var arr = videotag.length;
					    //var arr = [].slice.call(videotag);
					    //var arr = Array.from(videotag);

					    //var child_nodes = arr.childNodes;
					    //console.info(arr[0]);
					    //console.info(videotag);
					    //videotag.item(0).style.height="100";
					    
					    //videotag.style.height="100%";
					    //videotag.style.width="100%";

					    //let myVideo: HTMLVideoElement = arr[0];
					    //console.trace(myVideo[0]);
						//myVideo[0].play();
						//console.log('IS ONLINE:', navigator.onLine);

						////autoPlayVideo();

					}, interval
				);

			})();
		}
	}
}