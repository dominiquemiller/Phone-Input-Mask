/* 
jQuery Phone number input mask plug-in
Author: Dominique Miller
2016
v0.1
*/

/* charCode [48,57] 	Numbers 0 to 9
 * keyCode 46  			"delete"
 * keyCode 9  			"tab"
 * keyCode 13  			"enter"
 * keyCode 116 			"F5"
 * keyCode 8  			"backscape"
 * keyCode 37,38,39,40	Arrows
 * keyCode 10			(LF)
*/

(function($){

    $.fn.inputMask = function() {

        this.attr('value', '(__)___-____');
        
        this.keydown(function(event) {
            allowedKeys = [ 46, 9, 13, 116, 8, 37, 38, 39, 40, 10 ];
            if ( allowedKeys.includes(event.keyCode) )  {
			    // let it happen, don't do anything
		    } else if (event.keyCode < 48 || event.keyCode > 57 ) {
                // Ensure that it is a number and stop the keypress
               event.preventDefault();	
		    }       
        });

        return this; // always return to ensure compliance with jQuery method chaining
    };

})(jQuery);


