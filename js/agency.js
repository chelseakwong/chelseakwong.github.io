//modal slider
var currentIndex;
var items;
var itemAmt;

function cycleItems() {
    var item = $('#testModal div').eq(currentIndex);
    items.fadeOut(500,function(){
        item.fadeIn(500);
    })
    item.css('display','inline-block');
}

$(document).ready(function(){
    
    $('.menu-btn').click(function(){
        $('nav').toggleClass('open');
        // array navs brings menu and top button forward
        var arrayNavs = document.getElementsByTagName("nav");
        var navBar = arrayNavs[0];
        navBar.style.position = 'relative';
        navBar.style.zIndex = 999;
        navBar.style.position = 'absolute';
        $(this).toggleClass('close-btn');
        var menuButton = document.getElementsByClassName("menu-btn");
        var menubtn = menuButton[0];
        menubtn.style.position = 'relative';
        menubtn.style.zIndex = 1000;
        menubtn.style.position = 'fixed';
        $('.container').toggle();
    })
    
    // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    //percentPosition: true,
    columnWidth: 350,
    gutter: 10,
      isFitWidth: true
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  


	//MODALS
	$('.thumbnail').click(function(){
        
        
        
		$('.modal-body').empty();
		var title = $(this).parent('a').attr("title");
		var caption = library[title].caption;
		$('.modal-title').html(title);
		var newHtml = (
			"<section class='slider-modal'>"+
            "<div class='container-modal' id='testModal'>"+
            "<div style='display: inline-block;'>"+
			getHtmlImg(title) +
			"</div>" + "</section>" +
			getCaption(title)
			);
		$(newHtml).appendTo('.modal-body');

		$('#myModal').modal({show:true});
		$(".grid").css("position","fixed");
		currentIndex = 0,
		items = $('#testModal div'),
  		itemAmt = items.length;
    
        var autoSlide = setInterval(function() {
            currentIndex += 1;
            if (currentIndex == itemAmt) {
                currentIndex = 0;
            }
            cycleItems();
        }, 7000);
        
    $('.container-modal').click(function() {
        clearInterval(autoSlide);
        currentIndex += 1;
        if (currentIndex == itemAmt) {
            currentIndex = 0;
        }
        cycleItems();
    });
	
	$('.close').click(function(){
		$(".grid").css("position","relative");
	});
	
	$('#close-btn-bottom').click(function(){
		$(".grid").css("position","relative");
	});

        

})});

