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
	
var library = {};
library.a = {img:"img_ME/sampleMason/1.jpg",
			caption: "Testing caption 1 2 3"}

	//MODALS
	$('.thumbnail').click(function(){
		$('.modal-body').empty();
		var title = $(this).parent('a').attr("title");
		var caption = library[title].caption;
		$('.modal-title').html(title);
		var newHtml = ("<a href='#' title='" + title +
			"'>" +
			"<img src='"+(library[title].img)+
			"' class = 'thumbnail img-responsive'>"+
			"</a>"+
			"<p>"+caption+"</p>"
			);
		console.log(newHtml);
		$(newHtml).appendTo('.modal-body');

		$('#myModal').modal({show:true});
		$(".grid").css("position","fixed");
	});
	
	$('.close').click(function(){
		$(".grid").css("position","relative");
	});
	
	$('#close-btn-bottom').click(function(){
		$(".grid").css("position","relative");
	});
	
});