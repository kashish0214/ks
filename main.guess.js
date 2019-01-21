function sayhii(){

	alert("hello");
	var username=prompt("What's your name");


	if(username=="kashish"){

		alert("hello "+ username);
	}
	else{

		alert("that's not my name");
	}



function response(){

 alert ("choose number 1 to 7");
 var list =[
   "you will be a billionaire",
   "watch for your health, more vitamins!",
   "you will go to Mars",
   "hmm! nothing special",
   "love of your life is on the way!",
 ];
 var number = Math.floor(math.random()*5);
 document.getElementbyId("response").innerHTML=list[number];
}
