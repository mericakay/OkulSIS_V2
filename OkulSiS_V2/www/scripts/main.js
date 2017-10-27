function clock() {// We create a new Date object and assign it to a variable called "time".
    var time = new Date(),

        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),

        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),


        seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(clock, 1000);
/*	Define Click Event for Mobile */
if ('ontouchstart' in window) { var click = 'touchstart'; }
else { var click = 'click'; }




/*	Reveal Menu */
$('div.button').on(click, function () {
    if (!$('div.content').hasClass('inactive')) {
        // Remove circle
        $('div.circle').remove();

        // Slide and scale content
        $('div.content').addClass('inactive');
        setTimeout(function () { $('div.content').addClass('flag'); }, 100);

        // Change status bar
        $('div.status').fadeOut(100, function () {
            $(this).toggleClass('active').fadeIn(300);
        });

        // Slide in menu links
        var timer = 0;
        $.each($('li'), function (i, v) {
            timer = 40 * i;
            setTimeout(function () {
                $(v).addClass('visible');
            }, timer);
        });
    }
});



/*	Close Menu */
function closeMenu() {
    // Slide and scale content
    $('div.content').removeClass('inactive flag');

    // Change status bar
    $('div.status').fadeOut(100, function () {
        $(this).toggleClass('active').fadeIn(300);
    });

    // Reset menu
    setTimeout(function () {
        $('li').removeClass('visible');
    }, 300);
}

$('div.content').on(click, function () {
    if ($('div.content').hasClass('flag')) {
        closeMenu();
    }
});
$('li a').on(click, function (e) {
    e.preventDefault();
    closeMenu();
});