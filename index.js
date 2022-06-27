/*
// minified version
for(var buttonLength=document.querySelectorAll("button").length,i=0;i<buttonLength;i++)document.querySelectorAll("button")[i].addEventListener("click",function(){makeSound(this.innerHTML)});function makeSound(e){switch(e){case"w":new Audio("images/crash.mp3").play();break;case"a":new Audio("images/kick.mp3").play();break;case"s":new Audio("images/snare.mp3").play();break;case"d":new Audio("images/tom-1.mp3").play();break;case"j":new Audio("images/tom-2.mp3").play();break;case"k":new Audio("images/tom-3.mp3").play();break;case"l":new Audio("images/tom-4.mp3").play();break;default:alert("wrong key is pressed")}}document.addEventListener("keyup",function(e){makeSound(e.key)});

*/


var buttonLength = document.querySelectorAll("button").length;

for ( var i=0;i< buttonLength;i++)
{
	//console.log(document.querySelectorAll("button")[i]);
	document.querySelectorAll("button")[i].addEventListener("click",function  () {
//			console.log(i);
			var buttonInnerHtml = this.innerHTML;
			makeSound(buttonInnerHtml);
			

	})
	}
	
/*
//using jQuery
	$("button").click(function(){
			var buttonInnerHtml = this.innerHTML;
			makeSound(buttonInnerHtml);
	});
*/	
		

document.addEventListener("keyup", function(event) {
	makeSound(event.key);
})

/*
//using jQuery	
	$("button").keyup(function(event) {
	makeSound(event.key);
	
});
*/

				function makeSound(key){
			switch(key) {
				case "w":
				var crash=new Audio("crash.mp3");
				crash.play();
				break;
				
				case "a":
				var kick=new Audio("kick.mp3");
				kick.play();
				break;
				
				case "s":
				var snare=new Audio("snare.mp3");
				snare.play();
				break;
				
				case "d":
				var tom1=new Audio("tom-1.mp3");
				tom1.play();
				break;
				
				case "j":
				var tom2=new Audio("tom-2.mp3");
				tom2.play();
				break;
				
				case "k":
				var tom3=new Audio("tom-3.mp3");
				tom3.play();
				break;
				
				case "l":
				var tom4=new Audio("tom-4.mp3");
				tom4.play();
				break;
				
				
				//default:alert("wrong key is pressed");
				
		    
  }
}

console.log("hello world");

console.log("hello Rahul");

console.log("Last cherrypick");
