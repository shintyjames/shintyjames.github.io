//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){
	//alert("test");
	
	//grab image by id
	document.getElementById("magic8ball").src="magic8ball1.jpg";
	
	//grab the results
	document.getElementById("results").innerHTML="It's decidedly so!";
	
}