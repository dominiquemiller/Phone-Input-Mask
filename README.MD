## Synopsis

A lightweight easy to use input mask jQuery plug-in.

## Code Example

Default input mask is a phone number:
$(element).inputMask();

Don't want or need a phone input mask? Use your own:
$(element).inputMask({ mask: 'input-mask' });
Underscores represent a number for the mask. You can use any other symbols to represent the dividers of the mask. 
For example you can create a date mask: $(element).inputMask({ mask: '\_\_/\_\_/\_\_' });

## Motivation

Wanted a super lightweight tool I could re-use in my projects.

## Installation

Simply add the jQuery.input.mask.min.js or jQuery.input.mask.js to your projects javascript folder.
The only dependency, of course, is jQuery.

## Contributors

See a way to improve this plugin? No problem! Open a pull request.

