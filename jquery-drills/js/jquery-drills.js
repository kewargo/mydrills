// jQuery Drills Kerry Wargo

$(document).ready(function() {
// #1 Use .css to change the background color of #bgColor
    
    $('#bgColor').css('background-color', 'blue');
    
// #1.a
    var int = document.getElementById("int");
        int.addEventListener("mouseover", function() {
	    int.style.color = "red";
    }, true);

        int.addEventListener("mouseout", function() {
	    int.style.color = "blue";
    }, true);
    
// #2 Clone #cloneDiv with .clone and .append it to #cloneContainer
    
    var $clone = $('#cloneDiv').clone();
    $('#cloneContainer').append($clone);
    $clone.appendTo('#cloneContainer');
    
// #3 Select all odd .buttonlist .btn with :odd and add a closs of
// 'btn-warning' with .addClass.
    
    $('.buttonlist .btn:odd').addClass('btn-warning');
    
// #4 Then select the 4th .buttonlist .btn and .addClass of 'btn-infor'.
    
    $('.buttonlist .btn:eq(3)').addClass('btn-info');
    
// #5 Make the input with type "password" disabled with .prop
    
   $( "input[type='password']" ).prop( "disabled", function( i, val ) {
        return !val;
    });

// #6 Then change the value of the other text input to your full name

    $("input[id = 'inputName']").val("Kerry Wargo");
    
// #7 Check the checkbox with .prop

    $( "input[type='checkbox']" ).prop( "checked", function(i, val ) {return !val; });

// #8 Finally, select the select option that contains the word 'Orange' using :contains.

    $( "option:contains('Orange')" ).css( "background", "orange" );
    
// #9 Hide #hideme with .hide

    $( "#hidee" ).hide();
    
// #10 Slide up #slideme with .slideUp.

    $( "#slideme" ).click(function() {
        $( "#slideme" ).slideUp( "slow", function() {
        // Animation complete.
      });
    });
    
// #11 Show #faceme with a flair using .fadeIn.

    $( "#fademe" ).fadeIn( "slow", function() {
        // Animation complete.
      });

// #12 Remove #removeme with .remove.

    $( "#removeme" ).remove();
    
// #13 Empty #emptyme with .empty.

    $( "#emptyme").empty();
    
// #14 Select the div that isn't .highlighted and give it 50% opacity with .net and .css.

    $( "div.span2" ).not( ".highlighted" )
        .css( "opacity", ".5" );
        
// #15 Get the left and top offset of #findme and display that
//     information as text inside that element

    $( "*", document.body ).click(function( event ) {
        var offset = $( this ).offset();
        event.stopPropagation();
        
    $( "#findme" ).text( this.tagName +
        " coords ( " + offset.left + ", " + offset.top + " )" );
    });    

});
