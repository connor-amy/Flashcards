function BasicCard(uFront, uBack) 
{
	this.front = uFront;
	this.back = uBack;
}


module.exports = BasicCard;




//Troubleshooting
/*
var firstPresident = new BasicCard( "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?" 
console.log(firstPresident.front);

// "George Washington" 
console.log(firstPresident.back); 
*/