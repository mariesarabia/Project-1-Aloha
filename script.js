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

$('.subscribe-button').on('click', function(event){

    var subscribeEmail = document.forms["newsletter-subscription"]["email"].value;

    $('#subscribe').val(); 
    if($.trim(subscribeEmail).length == 0) {
      alert('Please enter valid email address');
    }
    if (validateEmail(subscribeEmail)) {
      alert('Thanks for subscribing!');
    }
    else {
      alert('Invalid Email Address');
              event.preventDefault();
    }

});

function validateEmail(subscribeEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(subscribeEmail)) {
        return true;
    }
    else {
        return false;
    }
}

});