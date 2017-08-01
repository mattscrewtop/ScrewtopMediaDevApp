import
{
	Component,
	OnInit,
	NgZone,
	ViewChild,
	ViewContainerRef
} 										from '@angular/core';

import { ContactUsPageModel } 			from '../models/contact-us-page.model';
import { ContactUsService } 			from '../services/contact-us.service';
import { ToastsManager } 				from 'ng2-toastr/ng2-toastr';

import { CdfContactUsFormComponent } 	from '@cdf/cdf-ng-contact-us-form/lib/components';
import { CdfContactUsFormModel } 		from '@cdf/cdf-ng-contact-us-form/lib/models';


@Component({
	selector: 'stm-contact-us-base',
	templateUrl: './contact-us-base.component.html',
	styleUrls: [ './contact-us-base.component.scss' ],
	providers: []
})
export class ContactUsBaseComponent implements OnInit
{
	PageData: ContactUsPageModel;
	@ViewChild(CdfContactUsFormComponent) ContactUsFormComponent: CdfContactUsFormComponent;

	constructor
		(
			private zone: NgZone,
			private contactUsService: ContactUsService,
			public toastr: ToastsManager,
			vRef: ViewContainerRef
		)
	{
		this.toastr.setRootViewContainerRef(vRef);
	}

	public goToSay(event)
	{
		event.stopPropagation();
		window.scrollTo(0, 1450);
	}


	ngOnInit()
	{
		this.contactUsService.GetPageData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('########### CONTACT US PAGE DATA', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	}


	onNotifyFormSubmitted(formModel: CdfContactUsFormModel)
	{
		// console.log('****************** CONTACT US FORM SUBMISSION:', formModel);
		// console.log('****************** CONTACT US FORM COMPONENT:', this.ContactUsFormComponent);

		this.contactUsService.SendEmail(formModel).subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.ContactUsFormComponent.ResetForm();

						//console.log('########### CONTACT US FORM DATA SENT....');

						this.toastr.success('Thanks for reaching out to us!', 'Success!');
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);
	};
}
