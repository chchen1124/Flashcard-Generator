//list required nodes
var inquirer=require("inquirer");
//constructor for BasicCard with properties of front and back
function BasicCard(front,back)
{
	this.front=front;
	this.back=back;
}

//create the basic cards
var card1=new BasicCard("What is Newton's second law","Force and Acceleration");
var card2=new BasicCard("What is the value of the gravitational acceleration","10 m/(s^2)");
var card3=new BasicCard("What is the formula for momentum","Mass times velocity");
var card4=new BasicCard("What is the formula for Kinetic Energy","KE=0.5*m*v*v");
var card5=new BasicCard("What is the formula for Potential Energy","PE=mgh");
var card6=new BasicCard("What is Newton's third law","Action and Reaction");
var card7=new BasicCard("What is the formula for displacement","velocity times time");
var card8=new BasicCard("What is the formula for density","mass divided by volume");
var card9=new BasicCard("What is the value of the speed of light","3*(10^8) m/s");
var card10=new BasicCard("What is the value of Avogadro's constant","6.02*(10^23)");
var cardArr=[];
//push the basic cards into the card array
cardArr.push(card1);
cardArr.push(card2);
cardArr.push(card3);
cardArr.push(card4);
cardArr.push(card5);
cardArr.push(card6);
cardArr.push(card7);
cardArr.push(card8);
cardArr.push(card9);
cardArr.push(card10);

//initialize the ctn and score to be 0
var score=0;
var ctn=0;

//function allows user to play the quiz game
function QuizTime()
{
	//store the questions and correct answers
	var store_ques=cardArr[ctn].front;
	var store_ans=cardArr[ctn].back;
	if(ctn<cardArr.length)
	{
		//prompts for an answer to the current question
		inquirer.prompt([
			{
				name:"the_input",
				message: store_ques
			}
		]).then(function(ans)
		{
			//if the answer the user puts in is equal to the correct answer, print out correct and increment the score
			if(ans.the_input===store_ans)
			{
				console.log("Correct");
				score++;
			}
			//else print out what the correct answer is
			else
			{
				console.log("Sorry but the correct answer is "+store_ans);
			}
			//increment the cnt to go to the next question 
			ctn++;
			//if ctn is less than the length of the card array recursively invoke the QuizTime() function
			if(ctn<cardArr.length)
			{
				QuizTime();
			}
			//otherwise call the method DoneWithQuiz 
			else
			{
				DoneWithQuiz();
			}
		});
	}
}

//DoneWithQuiz method displays your quiz score and asks if you want to play again
function DoneWithQuiz()
{
	console.log("Your total quiz score is "+score);
	//asks if you want to play again
	inquirer.prompt([
		{
			name:"my_response",
			message:"Do you want to play again?"	
		}
	]).then(function(ans){
		//if the answer is yes then call the QuizTime function to play the quiz game again
		if(ans.my_response==="yes")
		{
			QuizTime();
		}
		//otherwise print out a farewell message
		else
		{
			console.log("Okay See ya!");
		}
	});
}

//call the QuizTime method here to start the quiz
QuizTime();
//exports the constructor for creating basic cards
module.exports=BasicCard;