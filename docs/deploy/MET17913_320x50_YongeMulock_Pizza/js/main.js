var main, clickable;
var split, dipIt1, dipIt2;

function init(){

	console.log("INIT")

	//SET ELEMENT VARIABLES FOR ACCESS (NOT ALWAYS NEEDED FOR SIMPLE EXECUTIONS WHEN USING TweenMax)

	main = document.getElementById("viewport");
	clickable = document.getElementById("clickable");


	eventListeners();

  	trackClips();
}

function trackClips(){

	// SET ELEMENT INITIAL PROPERTY VALUES HERE

	TweenMax.set(border, {alpha:1})
	TweenMax.set(background, {alpha:1})
	TweenMax.set(text3, {alpha:1})
	// TweenMax.set(dipIt1, {alpha:1})

	TweenMax.delayedCall(.3, frameOne)

}

function eventListeners(){

	console.log("Setting Buttons");

	//clickable.style.cursor = "pointer"
	//clickable.addEventListener("click", mainExit, false);
	clickable.addEventListener("mouseover", bannerOver, false);
	clickable.addEventListener("mouseout", bannerOut, false);

}

function frameOne(){



	const tl = new TimelineMax()
	tl.to("#text1", .3, {opacity:1})
	tl.to("#text4", .3, {opacity:1}, "+=.5")

	tl.to(["#cta", "#sheenWrapper"], .3, {opacity:1}, "+=.5")
	
	tl.to("#sheen", .6, {x:140}, "+=.5")
	// TweenMax.to(text1, 0.5, {opacity:1})


	// TweenMax.delayedCall(.1, frameTwo);

}

function frameTwo(){
	// TweenMax.to(text1, 0.5, {delay:1.3, alpha:0})

	TweenMax.to(background2, 0.5, {delay:1.3, alpha:0.7})
	
	TweenMax.delayedCall(2, frameFour);
}


function frameFour(){
	TweenMax.to(text4, 0.5, {opacity:1})


	TweenMax.to(cta, 0.5, {opacity:1, delay:1.8, onComplete:bannerOver})
}

function bannerOver(e){
	// TweenMax.to(ctaOver, 0.35, {alpha:0.4, onComplete:bannerOut, overide:0})
	TweenMax.to(sheen, 0.5, {x:140})
}

function bannerOut(e){
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
