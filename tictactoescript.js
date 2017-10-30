var character = 'X';

//This function handles the onclick event
function turn(location){
	
	//switch between X and O
	if(character == 'X'){
		character = 'O';
	}
	else{
		character = 'X';
	}
	
	document.getElementById(location).innerHTML = character;
}