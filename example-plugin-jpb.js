;(function ( $, window, document, undefined ) {
	'use strict';

	$.fn.ExamplePlugin = function() 
	{

	    return this.each( function(){

	        var self      			= $(this);


			    // logic goes Here
          

	    });
	};

})( jQuery, window, document );



jQuery(document).ready(function($) {

    $('#special-order').ExamplePlugin();
});
