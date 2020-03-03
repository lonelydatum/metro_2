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
	// TweenMax.set(someElement, {alpha:1})
	// TweenMax.staggerFrom(split.chars, 0.5, {opacity:0, y:-20, ease: Back.easeOut.config(3)}, 0.05)

	// TweenMax.to(dipIt1, 0.5, {opacity:0, delay:1.5})

	TweenMax.to(text1, 0.5, {alpha:1})
	// TweenMax.staggerFrom(split.chars, 0.5, {opacity:0, y:-20, ease: Back.easeOut.config(3)}, 0.05)

	// TweenMax.to(dipIt1, 0.5, {opacity:0, delay:1.5})

	// TweenMax.from(dipIt1, 0.5, {scale:0, alpha:0, ease: Back.easeOut.config(3)})

	TweenMax.delayedCall(1.25, frameTwo);

}

function frameTwo(){
	TweenMax.to(text1, 0.5, {delay:1.3, alpha:0})

	TweenMax.to(background2, 0.5, {delay:1.3, alpha:0.7})
	// TweenMax.staggerFrom(split.chars, 0.5, {opacity:0, y:-20, ease: Back.easeOut.config(3)}, 0.05)

	// TweenMax.to(dipIt1, 0.5, {opacity:0, delay:1.5})

	// TweenMax.from(dipIt1, 0.5, {scale:0, alpha:0, ease: Back.easeOut.config(3)})

	// TweenMax.set(dipIt2.childNodes[1], {opacity:0})
	// TweenMax.set(dipIt2.childNodes[2], {opacity:0})
	// TweenMax.set(dipIt2.lastChild, {opacity:0})

	TweenMax.delayedCall(2, frameFour);
}


function frameFour(){
	TweenMax.to(text4, 0.5, {opacity:1})


	TweenMax.to(cta, 0.5, {opacity:1, delay:1.8, onComplete:bannerOver})
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
