var BasicCard=require("./BasicCard.js");

//ClozeCard constructor with properties of fullText and cloze
var ClozeCard=function(text,cloze)
{
	this.fullText=text;
	this.cloze=cloze;
}

//prototype function of partial to display the partial message 
ClozeCard.prototype.partial=function()
{
	console.log(" ... "+this.fullText.substring(this.fullText.indexOf("is")));
}

//create the basic cards
var card1=new BasicCard("What is Newton's second law","Force and Acceleration");
var card2=new BasicCard("What is the value of the gravitational acceleration","10 m/(s^2)");
var card3=new BasicCard("What is the formula for momentum","Mass times velocity");
var card4=new BasicCard("What is the formula for Kinetic Energy","KE=0.5*m*v*v");

//create the cloze cards
var c1=new ClozeCard("Force and Acceleration is Newton's second law","Force and Acceleration");
var c2=new ClozeCard("10 m/(s^2) is the value of the gravitational acceleration","10 m/(s^2)");
var c3=new ClozeCard("Hey you","Ouch");
var c4=new ClozeCard("Mass times velocity is the formula for momentum","Mass times velocity");
var c5=new ClozeCard("is is is is","is");

//create a clozeCard array and push the cloze cards into the array
var clozeCardArr=[];
clozeCardArr.push(c1);
clozeCardArr.push(c2);
clozeCardArr.push(c3);
clozeCardArr.push(c4);
clozeCardArr.push(c5);

GetCardInfo();

//GetCardInfo gets the cloze, fullText, and partial text for each cloze card
function GetCardInfo()
{
	var ctn=0;
	var g,h;
	//loops through the entire array
	while(ctn<clozeCardArr.length)
	{
		//gets the full text of the current cloze card
		g=clozeCardArr[ctn].fullText;
		//gets the cloze text of the current cloze card
		h=clozeCardArr[ctn].cloze;
		//if the full text includes the cloze text and the cloze text doesn't include is, then print out the full text, cloze text, and the partial text		
		if(g.includes(h)&&(!(h).includes("is")))
		{
			console.log(g);
			console.log(h);
			clozeCardArr[ctn].partial();
		}
		//else print out an error message stating that the cloze is not within the full text
		else
		{
			console.log("Error! Cloze is not in the text!");
		}
		console.log("------------------------------");
		ctn++;
	}
}

//exports the constructor for creating cloze cards
module.exports=ClozeCard;