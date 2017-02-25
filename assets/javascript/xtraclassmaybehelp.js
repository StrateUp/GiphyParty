//Brandons coding help
//giphy object practice
var giphy = {
	topics: ["pug","penguin","flamingo","binturong","kinkajou"],
	queryURL: "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10",











//call APi with btn (index) //this is best practice 

}

var form = {
	//this will add an element to our array topics.push

}




$(document).ready(function(){
//write buttons to the page

	//get buttons from giphy object
	//write to page			__________we want to reuse this, so make it fcn. 

	//bind event handler
		//1. buttons
		//2.form

	//
//actual steps
//1.write button to page
//2.bind event click to buttons
//3. add button to page

//every element on your page is an object. the new button generated in the form, 
$("button.animal").on("click", function(){
}
//clicking the first will only call the first set of buttons. this is where you have to define the 
use the html div
$("#button-list").on("click", "button.animal", function(){
//here you are passsing 2 strings and a function. click -still your event handler, calling this on the parent
//giving it to the larger div, action triggering this will be delegated to the child(descendant)
//use this for all your "button clicks"
//create your buttons with a class of animal
})
})
});

//animated vs still
var returnImages = []
for(var i = 0; i < response.data.length)

//callback function example
//omg i dont even get this and its totally wasting my time
	function doYourFcn(cb){
		setTimeout(function(){
			cb();
		},1000);
	}
	console.log("A");

	doYourFcn (function(){
		console.log("Boo Ya!");
	});
	console.log("B");

	var trivia ={
		timeLeft: 30,
		initTimer: function(cb){
			var self = this;
			setInterval(function(){
				var tr = self.updateTime();
				cb(tr);
			}, 1000);
			}),
		updateTime: function(){
			this.timeLeft --;
			return this.timeLeft;
		}
		}

	}
	trivia.intTimer(function(x){
		$("#time-left").html(x);
	});