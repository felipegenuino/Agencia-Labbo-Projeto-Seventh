//Plugin Carousel
$(document).ready(function() {
     $("#slider-main").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
         pagination : false,
        paginationNumbers: false
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
 });


$(document).ready(function() {
    $("#responsive-tab").easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any custom width
        fit: true,   // 100% fits in a container
        closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
        activate: function() {}   // Callback function, gets called if tab is switched
     });
});




