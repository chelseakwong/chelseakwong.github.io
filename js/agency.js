//modal slider
var currentIndex;
var items;
var itemAmt;
var tempScrollTop = $(document.body).scrollTop();

function cycleItems() {
    var item = $('#testModal div').eq(currentIndex);
    items.fadeOut(300,"swing",function(){
        window.setTimeout(function(){
            item.fadeIn(200,"swing");
//            item.css('display','inline-block');
        },300)
    })
}

$(document).ready(function(){
    // scroll to fixed of logo
    $('.title').scrollToFixed({
        preFixed: function(){
            $(this).css("margin-top", "0px");
        },
        preUnfixed: function(){
            $(this).css("margin-bottom", "5rem")
        },
    });
    
    $('#worksMenu').scrollToFixed({
        marginTop: $(".title").innerHeight(),
        preFixed: function(){
            $(this).css("margin-top", "0px");
            $(".grid").css("margin-top", "15rem");
        },
        preUnfixed: function(){
            $(this).css("margin-top", "15rem");
            $(".grid").css("margin-top", "0rem");
        },
    });
    
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
    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer',
            
        }
    })
          
  // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    // item filters init
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
        $("body").addClass("modal-open");
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
        }, 2500);
        
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
        $("body").removeClass("modal-open");
	});    
        
})});

