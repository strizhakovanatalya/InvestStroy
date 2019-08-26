$( document ).ready(function(){
    $( ".top-nav-btn" ).click(function(){ 
        $( ".top-nav-menu" ).toggleClass("top-nav-menu__active"); 
    });
    $( ".left-sidebar-btn" ).click(function(){ 
        $( ".left-sidebar-menu" ).toggleClass("left-sidebar-menu__active"); 
    });
    $('.carousel-items').slick({
        arrows: false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
});