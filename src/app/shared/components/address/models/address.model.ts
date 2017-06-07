export class AddressModel
{
	AddressLine1: string;
	AddressLine2: string;
	City: string;
	State: string;
	ZipCode: string;
	Country: string;

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//AddressLine1
			if (rawJson.addressLine1)
			{
				this.AddressLine1 = rawJson.addressLine1;
			}

			//AddressLine2
			if (rawJson.addressLine2)
			{
				this.AddressLine2 = rawJson.addressLine2;
			}

			//City
			if (rawJson.city)
			{
				this.City = rawJson.city;
			}

			//State
			if (rawJson.state)
			{
				this.State = rawJson.state;
			}

			//ZipCode
			if (rawJson.zipCode)
			{
				this.ZipCode = rawJson.zipCode;
			}	

			//Country
			if (rawJson.country)
			{
				this.Country = rawJson.country;
			}	
		}
	}
}