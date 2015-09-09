var library = {};
library.a = {img:["img_ME/sampleMason/1.jpg",
				 "img_ME/sampleMason/7.jpg"],
			caption: "Testing caption 1 2 3"}

//library.title
function getHtmlImg(title){
    var tot = "";
    for(i = 0;i<library[title].img.length;i++){
        if (i ==0){
            var imgSrc =  "<img src='" + 
                (library[title].img[i]) +
                "'/></div>";
            tot += imgSrc;
        }
        else{
            var div = "<div><img src='"+
                (library[title].img[i])+
                "'/></div>";
            tot += div;
        }
    }
    console.log(tot);
    return tot;
}

function getCaption(title){
    return "<p>"+library[title].caption+"</p>";
}