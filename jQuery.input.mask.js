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

    jQuery.fn.inputMask = function() {

        var phoneInput = this;

        function phone_input_mask() {
            var mask = '(__)___-____';
            var myNumbers = [];
            var myValue = phoneInput.val();
            var newValue = '';
            var lastPosition = 1;

            for(var i = 0; i < myValue.length; i++) {
                if ( !isNaN(myValue[i]) && myValue[i] != ' ' ) {
                    console.log(myValue[i]);
                    myNumbers.push(myValue[i]);
                }
            }

            console.log(myNumbers);
        
        }
        
        this.keydown(function(event) {
            allowedKeys = [ 8, 9, 10, 13, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 116 ];
            if ( allowedKeys.includes(event.keyCode) )  {
			    // let it happen, don't do anything
            } else if (event.keyCode < 48 || event.keyCode > 57 ) {
                // Ensure that it is a number and stop the keypress
               event.preventDefault();	
		    }       
        });

        this.keyup(function(event) {
            phone_input_mask();
        });

        
        return this; // always return to ensure compliance with jQuery method chaining
    };

})(jQuery);


