

$(window).scroll(function () {
    if ($(this).scrollTop() >900 && $(this).scrollTop() <1800) { 
        //change yes to no
        $('h3').html('data fusion');
    } else if ($(this).scrollTop() >1800 && $(this).scrollTop() <2600) { 
        //change yes to no
        $('h3').html('uno scenario reale');
    } else if ($(this).scrollTop() >2600 && $(this).scrollTop() <3500) { 
        //change yes to no
        $('h3').html('esplora la piattaforma');
    } else {
        //set h1 text to yes
        $('h3').html('scrolla per continuare');
    }
});



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})