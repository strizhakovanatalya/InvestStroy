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
    var elem = document.querySelector('.calc-range');
    var init = new Powerange(elem, { min: 100000, max: 3000000, start: 700000, hideRange: true, step:100000 });
    
    var per, month, result, total, monthly;
    var money = +$('.calc-range').val();

    
    $('input[name="programms"]').on('change', function(event){
        month = +$(this).attr('data-month');
        per = +$(this).attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = parseInt(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
        $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
        $('#month').text(month);
    })

    $('.calc-range').on('change', function(event){
        $('.calc-summ-invest-num span').text($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
        var radio = $('input[name="programms"]:checked');
        money = +$(this).val();
        month = +radio.attr('data-month');
        per = +radio.attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = parseInt(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
        $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
    })
});