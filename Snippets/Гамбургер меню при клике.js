$( '.menu-toggle' ).click( function() {
	if ( $( '#menu' ).is( ':hidden' ) ) {
		$( '#menu' ).show('slideToggle');
	} else {
		$( '#menu' ).hide('slideToggle');
	}
});

// $( '.menu-toggle' ).click( function() {
// 	   if ( $( '#menu' ).is( ':hidden' ) ) {
// 	    $( '#menu' ).show('slideToggle');
// 	  } else {
// 	    $( '#menu' ).hide('slideToggle');
// }