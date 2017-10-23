//create a list of strings, to -hold 8 ball responses
var list = ["Yes.",
			"No!",
			"Outlook not so good.",
			"Concentrate and try again.",
			"Try again!",
			"Don't count on it.",
			"My reply is no.",
			"Signs point to yes.",
			"Reply hazy, try again."];
			
var imageState = "front";

//this function outputs a random number
function randomNum(){
	return Math.floor(Math.random() * 10);
}

//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){
	
	//if the picture is of the front side...
	if(imageState == "front"){
		//grab image by id
		document.getElementById("magic8ball").src="magic8ball1.jpg";
	
		//grab the results
		document.getElementById("results").innerHTML=list[randomNum()];
		
		imageState = "back";
	}
	//else, it's the picture of the back side...
	else{
		//go back to the front picture
		document.getElementById("magic8ball").src = "magic8ball2.jpg";
		
		//change results paragraph to say something to prompt the user
		//to shake the 8 ball again
		document.getElementById("results").innerHTML="Click the magic 8 ball to tell your fortune";
		
		imageState = "front";
	}
	
	
	//alert(randomNum());
	
}