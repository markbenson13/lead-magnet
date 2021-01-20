(function($) {

    // console.log("hello");

    $(document).ready( function() {

        $('.merchandise-container').slick({
            autoplay:true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

})(jQuery);