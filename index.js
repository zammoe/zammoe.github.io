var thumbs = $( ".left img");
var popups = $( ".middle > div" );

//

$(document).ready(function(){
    $('a').on('click',function(){
        var aID = $(this).attr('href');
        var elem = $(''+aID).html();

        $('.target').html(elem);
    });
});

function openDetails( ) {
	var thumb = $( this );
	thumb.addClass( "selected" );
	thumbs.not( thumb ).removeClass( "selected" );

	var popup = $( "#popup-" + $( this ).attr( "id" ) );
	popup.show( ).find( "img[data-src]" ).Lazy( {
      visibleOnly: true,
			afterLoad: function( e ) {
				$( e ).removeAttr( "data-src" );
			}
	} );

	var info = popup.find( '.title' ).html( ) + '<br/>'
	 				 + popup.find( '.description' ).html( );

	$( '.right-pane.first .information' ).html( info );

	popups.not( popup ).hide( );

	// var about = $(this).data("about");
	// var title = $(this).data("title");
	// var imgsrc = $(this).attr("src");
	//
	// $("#big-image").attr("src", imgsrc);
	// $("#title").text(title);
	// $("#description").text(about);
}
thumbs.click( openDetails );

			//.first( ).trigger( "click" );
