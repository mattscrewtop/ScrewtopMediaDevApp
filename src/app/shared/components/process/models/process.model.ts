export class ProcessModel
{
	Step: Number;
	Title: string;
	Summary: string;

	constructor(rawJson: any)
	{
		if(rawJson)
		{
			//STEP
			if (rawJson.step)
			{
				this.Step = rawJson.step;
			}

			//TITLE
			if (rawJson.title)
			{
				this.Title = rawJson.title;
			}

			//SUMMARY
			if (rawJson.description)
			{
				this.Summary = rawJson.description;
			}
		}
	}
}