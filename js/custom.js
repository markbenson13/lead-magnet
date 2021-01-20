(function($) {

    $(document).on("ready", function() {

        $('.merchandise-container').slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

})(jQuery);