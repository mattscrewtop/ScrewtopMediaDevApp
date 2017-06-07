import {ToastOptions} from 'ng2-toastr';

export class ToastrCustomOption extends ToastOptions
{
	animate = 'flyLeft'; // you can override any options available
	positionClass = 'toast-top-center';
	enableHTML = true;
	toastLife = 4000;
	newestOnTop = false;
	showCloseButton = true;
}