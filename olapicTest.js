//Jonathan Weng 9/28/2015
//OLAPIC TECH TEST
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
$(document).ready(function () {
    $.ajax({
        url: 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18',
        contentType: 'application/json',
    }).done(function (result) {
        //set view class width based on number of images
        var viewWidth = 160 * (result.data._embedded.length);
        $('.view').width(viewWidth);
        //Inject all media called from API into view class
        $.each(result.data._embedded, function (index, value) {
            if (value.source_id) {
                //append each photo to view with the "normal" as a hyperlink and the thumbnail as img 
                $('.view').append(
                    '<div class="imgDiv" id="photo-' + index + '"><a href="' + value.images.normal +
                //lightbox trigger class listener
                '" class="lightboxTrig"><img class="images" src="' + value.images.thumbnail +
                    '"></a></div>');
            }
        });

        var view = $('.view');
        var photos = $('div', view);
        var leftValue = -160;
        //Left arrow function. Moves image over by one image at a time
        $('#left').on('click', function () {
            view = $('.view');
            photos = $('div', view);
            //prepend results(back to front) before animating results
            $('.view').prepend($(photos[photos.length - 1]));
            //set left value to -160
            view.css('left', leftValue);
            //animate from left to 0
            $('.view').animate({
                'left': 0
            }, 200);
        });
        //Right arrow function. Moves image over by one image at a time
        $('#right').on('click', function () {
            //Animate first when moving right. Image farthest to the left will vanish before the animate.
            $('.view').animate({
                'left': leftValue
            }, 200, function () {
                view = $('.view');
                photos = $('div', view);
                $('.view div:last').after($(photos[0]));
                view.css('left', 0);
            });
        });
        //Reference code:
        //http://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528

        $('.lightboxTrig').on('click', function (e) {
            //prevent default action that opens hyperlink
            e.preventDefault();

            //Get href
            var image_href = $(this).attr("href");
            /* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

            if ($('#lightbox').length > 0) { // #lightbox already exists
                //place href as img src value
                $('#content').html('<img src="' + image_href + '" />');

                //show lightbox window - you could use .show('fast') for a transition
                $('#lightbox').fadeIn();
            } else { //#lightbox does not exist - create and insert (runs 1st time only)

                //create HTML markup for lightbox window
                var lightbox =
                    '<div id="lightbox">' +
                    '<p>Click to close</p>' +
                    '<div id="content">' + //insert clicked link's href into img src
                '<img class=inner src="' + image_href + '" />' +
                    '</div>' +
                    '</div>';
                //insert lightbox HTML into page
                $('body').append($(lightbox).fadeIn());
            }

        });

        //Click anywhere on the page to get rid of lightbox window
        $('body').on('click', '#lightbox', function () {
            $('#lightbox').fadeOut();
        });
    }).fail(function (err) {
        $('.view').html('ERROR: ' + err);
    });
});

</script>