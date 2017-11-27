
//draw random circle in clickPanel
function randomCircle(){

	//randomly get top positions
	document.getElementById("circle").style.top = "100px";
	
	//randomly get left positions 
	document.getElementById("circle").style.left = "100px";
	
	//update position of circle
	document.getElementById("circle").style.right = "100px";
	
	
}

//handles onclick event
//when a random circle is clicked in clickPanel, it disappears
//then generates a new random circle
function clickCircle(){

	//circle is clicked, hide circle
	document.getElementById("circle").style.visibility = "hidden";
	
	//generate random circle
	document.getElementById("clickPanel").style.visibility = "appear";
	
}

document.getElementById("circle").style.visibility = "hidden";
document.getElementById("circle").style.top = "100px";