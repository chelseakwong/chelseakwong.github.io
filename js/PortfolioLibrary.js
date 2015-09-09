var library = {};

library.Prepper = {img:["img_ME/Prepper/main_screen.jpg",
                       "img_ME/Prepper/main_all.jpg",
                       "img_ME/Prepper/grocery.jpg",
                        "img_ME/Prepper/scanreceipt.jpg",
                       "img_ME/Prepper/couponlist.jpg",
                       "img_ME/Prepper/recipes.jpg"],
                   caption:"<p>Prepper is a personalized recipe mobile application, designed to revolutionize how we prepare, consume, and purchase meals. Its purpose is to save the user time and money and promote healthy eating. This is accomplished through its Recipe, Inventory, and Grocery List functions. The digital inventory can be updated by scanning grocery receipts and item barcodes, or by manual entry. </p> <p>A unique feature of Prepper is the notification of item expiration dates to reduce food waste. Recipes are automatically generated according to the items currently in the user’s inventory. These recipes can be filtered by categories such as calorie content, cook time, and ingredient expiration date. When an item is used up, it is automatically sent to a manageable To-Buy list to ease the burden of grocery shopping.</p> <p>Our team of 6 designed this product to enroll in the Society of Asian Scientists and Engineers annual nationwide Innoservice competition, our team was a finalist.</p>",
                   link: "documents/PrepperFinalReport.pdf",
                   linkDesc: "Final Report"
}

library.FoodySlap = {img:["img_ME/FoodySlap/open.png"],
                     caption:"Tinder for restaurants, a webapp that allows users to browse through nearby restaurants on 'cards.' If connected to Leap Motion the webapp could interact with the user's hand gestures to move cards. Used Yelp API to acquire information about restaurants. Worked with a team of 4.</p>",
                     link: "https://github.com/chelseakwong/FoodySlap",
                     linkDesc: "GitHub"
}

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
    return tot;
}

function getCaption(title){
    var caption = library[title].caption;
    if (library[title].link.length !=0){
        caption += "<a href='"+library[title].link+
            "'>"+library[title].linkDesc+"</a>";
    }
    console.log(caption)
    return caption;
}