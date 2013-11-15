$(document).ready(function (){
    
// #1 Detect a click on this button, then add a class of "btn-warning"
    
    $('#clickme').on('click', function(event){
        event.preventDefault();
        $('#clickme').addClass('btn-warning'); 
    }); 
    

// This works from console command line
/*var clickme = document.getElementById("#clickme"); 
clickme.addEventListener("mouseover", function() {clickme.style.color = 'blue'}, false);
clickme.addEventListener("mouseout", function() {clickme.style.color = 'red'}, false);
*/


    
// #2 Mad Libs - Listen for "keyup" events to concatenate a string
// and replace the sentence in the box beneath the text inputs.


$( "input#adverb_1" ).keyup(function() {
  alert( "Handler for #adverb_1 .keyup() called." );
});

$( "#verb_1" ).keyup(function() {
  alert( "Handler for #verb_1 .keyup() called." );
});

$( "#adverb_2" ).keyup(function() {
  alert( "Handler for #adverb_2 .keyup() called." );
});

/*    $('#adverb1_1').keyup (function( event ) {
       var a_1, v_1, a_2;
       
        if ( "input#adverb_1" ) {
            a_1 = ("The " + "#adverb1_1" + " fox"); 
            event.preventDefault();
        }    
        
        if ( "input#verb_1" ) {
            v_1 = (" " + "#dverb_1" + " the farmer\'s "); 
            event.preventDefault();    
        }    
        if ( "input#adverb_2" ) {
            a_2 = ("input#adverb_2" + " dog.");
            event.preventDefault();
        }
        
        $("div.well.adlib").replaceWith( a_1 + v_1 + a_2 ); 
    }); */  
 
 


// #3 Listen for a submit function on this form (use preventDefault()
// to avoid the page refreshing). If the user enters "human", alert
// a congratulatory message. If the user enters anything else, 
// alert "beep boop beep beep"
    
    $( "form" ).submit (function(){

            if ( $( "input.input-large" ).val() === "human") {
                alert("Congratulations!"); 
                event.preventDefault();    
            }
            if ( $( "input.input-large" ).val() !== "human") {    
                alert("Fuck you... asshole");
                event.preventDefault();
            }    
    }); 
    

// #4 Do something on hover - aka mouseenter/mouseleave. Anything goes!

    $('#hoverme').on('mouseover', function(event){
        event.preventDefault();    
        $('#hoverme').removeClass('btn-info').addClass('btn-danger'); 
   });
   
   $('#hoverme').on('mouseout', function(event){
        event.preventDefault();    
        $('#hoverme').removeClass('btn-danger').addClass('btn-info'); 
   });


/* #5 Detect clicks on .btn elements within .btn-container. 
If a .btn has a class of .disabled, do nothing. Otherwise, append an identical button 
to .btn-container, and add the "disabled" class to the button that was clicked. 
Use delegation to make sure the new buttons have the event listener, too. */
 
 

 
 
    
    
}); //End of Document Ready Function
