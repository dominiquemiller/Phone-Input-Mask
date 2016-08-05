/* 
jQuery input mask plug-in
Author: Dominique Miller
2016
v0.1
*/

/* keyCode [48 thru 57] Numbers 0 to 9
 * keyCode 46  			"delete"
 * keyCode 9  			"tab"
 * keyCode 13  			"enter"
 * keyCode 116 			"F5"
 * keyCode 8  			"backscape"
 * keyCode 37,38,39,40	Arrows
 * keyCode 10			(LF)
*/

(function($){

    $.fn.inputMask = function(options) {
        
        var settings = $.extend({
                            mask: '(___)___-____' 
                        }, options);

        var phoneInput = this;

        phoneInput.val();

        function phone_input_mask() {
            var mask = settings.mask;
            var myNumbers = [];
            var myValue = phoneInput.val();
            var newValue = '';
            var lastPosition = 1;

            for(var h = 0; h < myValue.length; h++) {
                if ( !isNaN(myValue[h]) && myValue[h] != ' ' ) {
                    console.log(myValue[h]);
                    myNumbers.push(myValue[h]);
                }
             }


            // replace underscores with number input
            for(var i = 0; i < mask.length; i++) {
              if ( mask[i] === '_' ) {
                  if (myNumbers.length === 0) {
                    newValue = newValue + mask[i];
                  } else {
                    var char = myNumbers.shift();
                    newValue = newValue + char;
                    lastPosition = i + 1;
                  }
              } else {
                  newValue = newValue + mask[i];
              } 
            }
            phoneInput.val(newValue);
            phoneInput[0].setSelectionRange(lastPosition, lastPosition );
        
        }
        this.val('').attr('placeholder', '');

        this.attr('placeholder', settings.mask);
        
        this.keydown(function(event) {
            allowedKeys = [ 8, 9, 10, 13, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 116 ];
            if ( allowedKeys.includes(event.keyCode) )  {
			    // if key is allowed, allow event to occur
            } else if (event.keyCode < 48 || event.keyCode > 57 ) {
                event.preventDefault();	
		    }       
        });

        this.keyup(function(event) {
            phone_input_mask();
        });

        
        return this; // always return to ensure compliance with jQuery method chaining
    };

})(jQuery);


