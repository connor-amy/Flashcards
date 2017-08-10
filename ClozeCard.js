function ClozeCard(uText, uCloze) 
{

	this.fullText = uText;
	this.cloze = uCloze;
	//Removes the cloze text from the full text and stores it in a new variable
	this.partial = this.fullText.replace(this.cloze, "...");

	//If the cloze isn't found in the text, throws an error
	if(this.partial == this.fullText)
	{
		this.partial = "";
		console.log("Error: The cloze deletion was not found in the sentence.");
	}

}


module.exports = ClozeCard;




//Troubleshooting
/*
var Q1 = new ClozeCard("Here is some text my dude", "apple");
console.log(Q1.partial);
console.log(Q1.fullText);
*/
/*
var firstPresidentCloze = new ClozeCard( "George Washington was the first president of the United States.", "George Washington");

// "George Washington" 
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States. 
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States. 
console.log(firstPresidentCloze.fullText); 

// Should throw or log an error because "oops" doesn't appear in "This doesn't work" 
var brokenCloze = new ClozeCard("This doesn't work", "oops");
*/