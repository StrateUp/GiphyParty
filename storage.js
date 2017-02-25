var giphy = {
	topics: ["pug","penguin","flamingo","binturong","kinkajou"],
	queryURL: "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10",
};

var form = {

};



//1st run form info 0fcn.

	validateForm: function() {
    	var x = $("#animal-form").id;
    		
    		console.log(x);
    		}	
}		
form.validateForm();

 	$("input").click(function(){
        console.log($("#animal-input").val());
	});

//trash above if other works

function createButton(button text){

var new = $(<button class= "btn"> stuff</button>)
};

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