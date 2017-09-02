$(document).ready(function() {
    // $(function() {
    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        prevNextButtons: false,
    });

    // Skip Link Bug Fix
    $(function() {
        $("a[href^='#']").not("a[href='#']").click(function() {
            $("#" + $(this).attr("href").slice(1) + "").focus();
        });
    });

    // Add smooth scrolling to all links (source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll)
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 116
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $("a").on('click', function(event) {

    });

});