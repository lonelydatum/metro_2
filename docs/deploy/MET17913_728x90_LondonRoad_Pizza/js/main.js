var main, clickable;
var split, dipIt1, dipIt2; 

function init(){

	console.log("INIT")

	//SET ELEMENT VARIABLES FOR ACCESS (NOT ALWAYS NEEDED FOR SIMPLE EXECUTIONS WHEN USING TweenMax)

	main = document.getElementById("viewport");
	clickable = document.getElementById("clickable");

	console.log(main);

	eventListeners();

  	trackClips();
}

function trackClips(){

	// SET ELEMENT INITIAL PROPERTY VALUES HERE

	TweenMax.set(border, {alpha:1})
	TweenMax.set(background, {alpha:1})
	TweenMax.set(text3, {alpha:1})
	// TweenMax.set(dipIt1, {alpha:1})

	TweenMax.delayedCall(1, frameOne)

}

function eventListeners(){

	console.log("Setting Buttons");

	//clickable.style.cursor = "pointer"
	//clickable.addEventListener("click", mainExit, false);
	clickable.addEventListener("mouseover", bannerOver, false);
	clickable.addEventListener("mouseout", bannerOut, false);

}

function frameOne(){
	
	console.log("FRAME ONE")
	
	//SET VALUE OF FRAME ONE ELEMENTS TO ALPHA 1
	TweenMax.to(text1, 0.5, {alpha:1})

	TweenMax.delayedCall(1.25, frameTwo);

}

function frameTwo(){
	TweenMax.to(text1, 0.5, {delay:1.5, alpha:0})
	TweenMax.to(text2, 0.5, {delay:1.8, alpha:1})

	TweenMax.delayedCall(0.5, frameThree);
}

function frameThree(){
	TweenMax.to(text2, 0.5, {delay:1.5, alpha:0})
	TweenMax.to(text4, 0.5, {delay:1.8, alpha:1})


	TweenMax.delayedCall(2.5, frameFour)
}

function frameFour(){
	
	TweenMax.to(cta, 0.5, {opacity:1, delay:1.8, onComplete:bannerOver})
	TweenMax.to(text3, 0.5, {opacity:1, delay:0.8})
	// TweenMax.delayedCall(3.4, frameFive)
}

function bannerOver(e){
	TweenMax.to(ctaOver, 0.35, {alpha:0.4, onComplete:bannerOut, overide:0})
	TweenMax.to(sheen, 0.7, {x:200})
}

function bannerOut(e){
	TweenMax.to(ctaOver, 0.35, {alpha:0, onComplete:setSheen})
}

function setSheen(){
	TweenMax.set(sheen, {x:0})
}


//REPLAY FUNCTION WHEN NEEDED
/*function replayFunction(e){
	
	Enabler.counter("REPLAY", true);

	console.log("REPLAY")

	main.removeEventListener("mouseover", bannerOver, false);
	main.removeEventListener("mouseout", bannerOut, false);

	trackClip();

}*/
