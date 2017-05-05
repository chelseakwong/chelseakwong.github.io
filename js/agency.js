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

$(document).ready(function(){
    //tool tip initialization
    $('.toolhover').tooltipster({
        theme: ['tooltipster-borderless', 'tooltipster-borderless-customized'],
        animation: 'grow',
        animationDuration: 150,
        delay: 80,
        plugins: ['follower']
    });

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
    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 150
        }
    })
          
  // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    $('#All').addClass("selected");
    $('#All').css('color','white');
    
    $('.spanSel').click(function(){
        $('.selectFilter').children('span').each(function(){
            $(this).removeClass("selected");
            $(this).css('color', 'black');
        })
        $(this).addClass("selected");
        $(this).css('color','white');
        filter = "." + $(this).attr('id');
        if ($(this).attr('id')=="All"){
            $grid.isotope({filter:'*'});
        }else{
            $grid.isotope({filter: filter});
        }
        
    });

	//MODALS
	$('.thumbnail').click(function(){
		$('.modal-body').empty(); 
        $('.text-box').empty();
		var title = $(this).parent('a').attr("name");
        var id = $(this).parent('a').attr('description');
		var caption = library[id].caption;
		$('.modal-title').html(title);
		var newHtml = (
            "<div class='wrap-modal'>" +
            "<div class='container-modal' id='testModal'>"+
            "<div class='img-modal' style='display: inline-block;'>"+
			getHtmlImg(id) + 
            "<h2 id='modal-prev'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span></h2>" +
			"<h2 id='modal-next'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></h2>" +
            "</div>"+ "</div>" + "</div>" );
        
        var captionHtml = ("<div class='caption-modal'>" + getCaption(id) + "</div>");
        
		$(newHtml).appendTo('.modal-body');
        $(captionHtml).appendTo('.text-box');
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
    
       
    //remove next prev buttons if only 1
    if (itemAmt == 1){
        $('#modal-prev').remove();
        $('#modal-next').remove();
    } else{
        $('.container-modal').hover(
            function(){
                $('#modal-prev').css('visibility','visible');
                $('#modal-next').css('visibility','visible');
            }, function(){
                $('#modal-prev').css('visibility','hidden');
                $('#modal-next').css('visibility','hidden');
            }
        );
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
        $('.modal-content').scrollTop(0);
        $(".grid").css("position","relative");
        $(window).scrollTop(tempScrollTop);
	});    
        
})});

