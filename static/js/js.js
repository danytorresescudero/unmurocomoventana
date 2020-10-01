$(document).ready(function() {

    $('.navbar-brand, .navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('#gallery').lightGallery();

    //FullScreen Bootstrap Modal Gallery
    var links = document.getElementById('links');

    if (links !== null) {
        blueimp.Gallery(
            links.getElementsByTagName('a'), {
                container: '#blueimp-gallery-carousel',
                carousel: true
            }
        );
    }
});