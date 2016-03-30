//modal slider
var currentIndex;
var items;
var itemAmt;
var tempScrollTop = $(document.body).scrollTop();

function cycleItems() {
    var item = $('#testModal div').eq(currentIndex);
    items.fadeOut(500,"swing",function(){
        window.setTimeout(function(){
            item.fadeIn(400,"swing");
//            item.css('display','inline-block');
        },500)
    })
}

function parser(jsonFile){
    
}

$(document).ready(function(){
    
    //add hover states for grid items
    $( ".grid-item" ).hover(function() {
        $(this).find("img").addClass("hover");
    }, function() {
       $(this).find("img").removeClass( "hover" );
    });
    
    $('.menu-btn').click(function(){
        $('nav').toggleClass('open');
        $('body').scrollTop(0);
        $('.container-fluid').toggle();
        var arrayNavs = document.getElementsByTagName("nav");
        var navBar = arrayNavs[0];
        navBar.style.zIndex = 900;
        navBar.style.position = 'absolute';
        
        var menuButton = document.getElementsByClassName("menu-btn");
        var menubtn = menuButton[0];
        menubtn.style.position = 'relative';
        menubtn.style.zIndex = 1000;
        menubtn.style.position = 'fixed';
        $(".menu-btn").css("visibility","visible")
        $(".menu-btn").toggleClass('close-btn');
        $('.container').toggle();
                
        //resume scroll
        $(this).css("visibility","visible");
        $(window).scrollTop(tempScrollTop);
        $(".grid").css("position","relative");
    })
    
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        //percentPosition: true,
        columnWidth: 350,
        gutter: 20,
        isFitWidth: true
    });
    
  // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });  


	//MODALS
	$('.thumbnail').click(function(){
		$('.modal-body').empty();        
		var title = $(this).parent('a').attr("name");
        var id = $(this).parent('a').attr('title');
		var caption = library[id].caption;
		$('.modal-title').html(title);
		var newHtml = (
            "<div class='wrap-modal'>" +
            "<div class='container-modal' id='testModal'>"+
            "<div class='img-modal' style='display: inline-block;'>"+
			getHtmlImg(id) + 
            "<h2 id='modal-prev'> Prev </h2>" +
			"<h2 id='modal-next'> Next </h2>" +
            "</div>" +
            "<div class='caption-modal'>" +
			getCaption(id) + "</div>" + "</div>" + "</div>"
			);
		$(newHtml).appendTo('.modal-body');

		$('#myModal').modal({show:true});
        
        //prevent scrolling of body when in modal
        //remember previous scroll position so can reset after we close modal
        tempScrollTop = $(document.body).scrollTop();
        $(".grid").css("position","fixed");
        
        currentIndex = 0,
		items = $('#testModal div'),
  		itemAmt = items.length;
    
        var autoSlide = setInterval(function() {
            if (itemAmt > 1){
                currentIndex += 1;
                if (currentIndex == itemAmt) {
                    currentIndex = 0;
                }
                cycleItems();
            }
        }, 7500);
        
     $( ".grid-item" ).hover(function() {
        $(this).find("img").addClass("hover");
    }, function() {
       $(this).find("img").removeClass( "hover" );
    });
        
    //add hover states in lightbox
    if (itemAmt > 1){
            $('.container-modal').hover(function(){
            $(this).find("h2").css("visibility", "visible");
        }, function(){
            $(this).find("h2").css("visibility", "hidden");
        });

        $('.container-modal h2').hover(function(){
            $(this).css("background-color", "rgba(0,0,0,0.5)");
        }, function(){
            $(this).css("background-color", "rgba(0,0,0,0.3)");
        });
    }
        
    //next and prev buttons on slider
    $('#modal-next').click(function() {
        clearInterval(autoSlide);
        if (itemAmt > 1){
            currentIndex += 1;
            //at max, restart
            if (currentIndex == itemAmt) {
                currentIndex = 0;
            }
            cycleItems();
        }
    });
        
    $('#modal-prev').click(function() {
        clearInterval(autoSlide);
        if (itemAmt > 1){
            currentIndex -= 1;
            //at min, restart
            if ((currentIndex<0)) {
                currentIndex = itemAmt-1;
            }
            cycleItems();
        }
    });
	
	$('.close').click(function(){
        clearInterval(autoSlide);
//        $('.modal-dialog').scrollTop(0);
        $(".grid").css("position","relative");
        $(window).scrollTop(tempScrollTop);
	});
        

})});

