$(document).ready(function (){
    
// Detect a click on this button, then add a class of "btn-warning"
    
    /* $('#clickme').on('click', function(evt){
        evt.preventDefault();
        $('clickme').addClass('btn-warning'); 
    }); */
    
    var clickme = document.getElementById("#clickme");
    clickme.addEventListener("click", function(event){
//    $('#clickme').on('click', function(event){
                event.preventDefault();
                console.log(event);
        });

// This works from console command line
clickme.addEventListener("mouseover", function() {clickme.style.color = 'blue'}, false);
clickme.addEventListener("mouseout", function() {clickme.style.color = 'red'}, false);



var int = document.getElementById("#int");
int.addEventListener("mouseover", function() {
	int.style.color = "red";
}, false);

int.addEventListener("mouseout", function() {
	int.style.color = "blue";
}, false);




    
// Mad Libs - Listen for "keyup" events to concatenate a string
// and replace the sentence in the box beneath the text inputs.

/*    $('#adverb1_target').on('keyup', function(){
        evt.preventDefault();
        
    }); */
    
    
// Listen for a submit function on this form (use preventDefault()
// to avoid the page refreshing). If the user enters human", alert
// a congratulatory message. If the user enters anything else, 
// alert "beep boop beep beep"
    
/*    $('button .btn').on('submit', function(evt){
        evt.preventDefault();
        if ('.input-large').text == 'human'
            alert('Congratulations!');
        else
            alert('Fuck you... asshole');
    }); */
    
    
    
    
    
}); //End of Document Ready Function
