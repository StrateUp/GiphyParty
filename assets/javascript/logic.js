
function setupEvents() {

 	$(".animalBtn").on("click",function(){
 	//i think i need an animalButtons variable but im not sure what this means
	//this is referring to the button fcn its inside. onclick
	var animal= $(this).attr("data-animal");
	console.log(animal);
//access the giphy APi w/ a apikey note we just added to url this time
//we need to create a variable queryURL for giphyAPI
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
	//what are our requests, a random animal button set a limit of 10

//run ajax to send a request to the giphy server
	$.ajax({
   		url: queryURL,
   		method: "GET"
   	})
//.done function will run what we need to run after we get the giphy data
		.done(function(response) {
		console.log(response);
//in here put all the gif display/reporting that will happen
		var results  = response.data 
       
		//run through the results page
        for (var i = 0; i < results.length; i++) {

        // Make a div with jQuery and store it in a variable named videosDiv.
        var videosDiv = $("<div>");

        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
      
        var p = $("<p>").text(results[i].rating);

        // Make an image tag with jQuery and store it in a variable named gifImage.
        var gifImage = $("<img>"); 

        // Set the image's src  and data states
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate",results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");
        gifImage.attr("class","gif");


        // Append the p variable to the animalDiv variable.
        p.appendTo(videosDiv);

        // Append the animalImage variable to the animalDiv variable.
        gifImage.appendTo(videosDiv);

        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
        $("#animals").prepend(videosDiv);     


        //ANIMATE THE IMAGES
		//set an on click event to the image*this must be in the .done fcn
		 $(".gif").on("click", function() {

	      	//make a variable named state and then store the image's data-state into it
	       	var state = $(this).attr("data-state");

	      	//check if the variable state is equal to 'still',
	      	console.log(state);
	      	//update the src attribute of this image to it's data-animate value,
	      	if( state === "still"){

	          $(this).attr("src", $(this).attr("data-animate"));
	          $(this).attr("data-state", "animate");          
	      	}else {
	          $(this).attr("src", $(this).attr("data-still"));
	          $(this).attr("data-state", "still"); 
	      	}

    	});




		} // end for loop
	});
});
 }



//are you ready for this?
$(document).ready(function(){

 	
var buttons = {
	//this array must generate buttons with the animal id
 	topics:["pug","penguin","flamingo","binturong","kinkajou"],

 	 //run a loop to go throught the items in the array
 	 setButtons: function(){
 	 		$("#animalButtons").empty();

	 	 for (var i = 0; i < this.topics.length; i++) {
	 			
	 		//create a button dynamically in jquery
	 		var topicButton = $("<button class = 'animalBtn'>");
	 		
	 		//send our created buttons to the div in HTML
			$("#animalButtons").append(topicButton);

			//print the array value to the buttons
	 		topicButton.text(this.topics[i]);

	 		topicButton.attr("data-animal",this.topics[i]);

	 		console.log(this.topics[i]);
 		}

 		setupEvents();
 	}
};

//buttons.topics;
buttons.setButtons();
setupEvents();
//find element by class
//$("#animalButtons").find("#button1");
//find element by element index relative to animalButtons
//$("#animalButtons").children(2);

//on click event for existing animal buttons

	//display rating
	//display image with no animation
	//on click event for the gifs themselves
		//onclick append a state of animate
		//onclick append a state of still
		//*see inclass assignment 4
//can we make an image object?

	//1st step: add a class to set an onclick to named gif w/in the image, 

	//also create: data-state, data-still, and data-animate attributes in the img


	

//accept form input .val();
	//user types in animal name
	//confirm animal name true
		//if (x == "") {
        		//alert("Name must be filled out");
        	//return false;
	//create submit button
		//$("#submit").on("click", )
		//on click create a newAnimalButton
		//append giphy info to new button id 
		//apply 
var form = {
	userInput:"",
	submit:"",
};


 $("#addAnimal").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newTopic = $("input").val().trim();
        console.log(newTopic);
        // Adding movie from the textbox to our array
        buttons.topics.push(newTopic);

        // Calling renderButtons which handles the processing of our movie array
        buttons.setButtons();
  });


	
	//when use adds an animal to the list
		

        	// This line grabs the input from the textbox
        	//var newTopic = $("#animal-input").val().trim();
        		
        		//var searchTerm = $('#animal-input').val().trim();
        		//console.log(this.searchTerm);
				
		// Adding movie from the textbox to our array
        //buttons.topics.push(animal);
		
        //console.log(newTopic);
        //});
    //buttons.setButtons();
});

