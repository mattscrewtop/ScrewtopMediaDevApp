export class PhoneNumberModel
{
	PhoneNumberType: string;
	PhoneNumber: string;

	constructor(rawJson: any)
	{
		if (rawJson)
		{
			//PhoneNumberType
			if (rawJson.type)
			{
				this.PhoneNumberType = rawJson.type;
			}

			//PhoneNumber
			if (rawJson.title)
			{
				this.PhoneNumber = rawJson.title;
			}	
		}
	}
}