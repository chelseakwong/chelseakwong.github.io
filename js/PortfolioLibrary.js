/*

    All portfolio items listed below with respective positions 
    in folders

*/
var library = {};

library.megakanji = {img: ["img_ME/megakanji/angry_chars_comp.jpg",
                          "img_ME/megakanji/sample.png"],
                     details:"April. 2016. Individual Project.",
                     video:"",
                     caption:"I created a Mega Kanji generator that combines similar meaning kanjis together to form a new kanji, 'Mega Kanji.' These aren't real, legible kanjis but rather a conglomerate of other real kanjis; mega-kanjis are supposed to appear legitimate but are not, in fact. I wanted to do this because I had to learn to write Chinese characters, (which are very similar to kanjis in Japanese) diligently – each stroke in a character must be in order and in the right place, such that the form of the character emerges correctly. Coming across the KanjiVG database inspired me to investigate the possibilities of creating new kanjis. I was also inspired by the NeoKanji twitter bot made by @hardmaru. <br><br> My program combines similar-meaning kanjis to form a new kanji. Above shows 10 different iterations. I referred to the machine-learning algorithm that @hardmaru had already written, and modified the parameters of stroke-length and deviation-threshold to fit my purpose. My software trains the machine with a set of kanjis (only those that mean angry in this example), so that the machine biases heavily on the ways the strokes of 'angry' kanjis are drawn. Afterwards, the machine will sample new SVG's and, because of the way I've trained it, it will generate conglomerate, mega-kanjis.",
                     link:"https://github.com/chelseakwong/MegaKanji",
                     linkDesc:"Github"}

library.tragedies = {img:["img_ME/tragedies/bentorodrigues_comp.jpg",
                          "img_ME/tragedies/chennaifloods_comp.jpg",
                          "img_ME/tragedies/gaza_comp.jpg",
                          "img_ME/tragedies/parisattacks_comp.jpg",
                          "img_ME/tragedies/shenzhenlandslide_comp.jpg",
                          "img_ME/tragedies/chennaifloods_comp.jpg",
                          "img_ME/tragedies/tianjin_comp.jpg"],
                    details:"March. 2016. Individual Project.",
                    video:"",
                    caption:"This project was created to visualize the colors of tragic events happening in 2015, to decontextualize the tragedies by extracting only the colors from photos taken of these events. The purpose of this was to see if images from social media correlate strongly to the actual images happening, and what does it look like if I juxtapose these grids of colors of disasters next to each other. Would people be able to relate events to colors with some context? I handpicked 7 events from 2015 that had a lot of media coverage so I had sufficient data points to draw accurate results: Paris Attacks, Gaza Conflict, TianJin Factory Explosions, ShenZhen Landslide, Chennai Floods, and Bento Rodrigues dam disaster. <br> <br>To achieve this, I coded an Instagram image scraper that collected images from Instagram corresponding to each event, and a color-extractor that does the following: for each set of images from an event, calculate the top 100 colors across all images, sort them by frequency of appearance, and then create a grid with them.",
                    link:"https://github.com/chelseakwong/InstaColorCollector",
                    linkDesc:"Github"}

library.AudioLight = {img:["img_ME/audioLight.png"],
                      details:"Jan. 2016. Individual Project.",
                      video:"<iframe src='https://player.vimeo.com/video/153323520' width='580' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
                      caption:"This is an Audio Visualizer built for the class Interactive Arts and Computational Design. The color dots on the wheel enlarge and blur when there is a sudden loudness in the audio. I designed the color light wheel such that the dots are all primary CYMK colors, and so when the circles overlap each other they create new colors based on which other ones they are overlapping with. I thought it would be interesting to look at.",
                      link:"https://github.com/chelseakwong/Audio-Visualizer",
                      linkDesc:"Github"
}

library.GenerativePolygonArt = {img:["img_ME/genArt/1.png","img_ME/genArt/2.png","img_ME/genArt/3.png","img_ME/genArt/4.png","img_ME/genArt/5.png"],
                      details:"<h4>Jan. 2016. Individual Project.</h4>",
                      video:"",
                      caption:"I made a polygon art generator bot that posts every hour. I wanted to create a generative art bot because I have always been fascinated by generative art. This bot autogenerates an image every hour with a program I wrote with Java Processing and Node.js, and it is hosted on an Ubuntu server provided by Digital Ocean. I was very pleased with the final result of my bot, and sometimes I was surprised by the level of complexity of the images. For example, the shading effect caused by a X or Y rotation gave the polygons some beams of light, and overlapped with others gave a nice multi-dimensional effect. ",
                      link:"https://twitter.com/polyartbot",
                      linkDesc:"Twitter Bot"
}


library.GrumbleBee = {img:["img_ME/grumblebee/main.png"],
                      details:"<h4>Nov. 2015. Group Project.</h4>",
                      video:"",
                      caption:"<p>Grumble Bee is a web application created to address issues that CMU students face with the general administration / way things are run on campus. It allows students to anonymously post and share their concerns, and view others' as well.</p>",
                      link:"http://grumble-bee.herokuapp.com/",
                      linkDesc:"Grumble Bee"
}

library.Prepper = {img:["img_ME/Prepper/main_screen.jpg",
                       "img_ME/Prepper/main_all.jpg",
                       "img_ME/Prepper/grocery.jpg",
                        "img_ME/Prepper/scanreceipt.jpg",
                       "img_ME/Prepper/couponlist.jpg",
                       "img_ME/Prepper/recipes.jpg",
                       "img_ME/Prepper/recipepage.jpg"],
                   details:"<h4>Oct. 2014 - June 2015. Group Project.</h4> <h4>SASE Innoservice National Competition. Finalist. </h4>",
                   video:"",
                   caption:"<p>Prepper is a personalized recipe mobile application, designed to revolutionize how we prepare, consume, and purchase meals. Its purpose is to save the user time and money and promote healthy eating. This is accomplished through its Recipe, Inventory, and Grocery List functions. The digital inventory can be updated by scanning grocery receipts and item barcodes, or by manual entry. </p> <p>A unique feature of Prepper is the notification of item expiration dates to reduce food waste. Recipes are automatically generated according to the items currently in the user’s inventory. These recipes can be filtered by categories such as calorie content, cook time, and ingredient expiration date. When an item is used up, it is automatically sent to a manageable To-Buy list to ease the burden of grocery shopping.</p> <p>Our team of 6 designed this product to enroll in the Society of Asian Scientists and Engineers annual nationwide Innoservice competition, our team was a finalist.</p>",
                   link: "documents/PrepperFinalReport.pdf",
                   linkDesc: "Product Final Report"
}

library.FoodySlap = {img:["img_ME/FoodySlap/open.png",
                         "img_ME/FoodySlap/instructions.jpg",
                         "img_ME/FoodySlap/gallery.jpg"],
                     details:"<h4>Sept. 2014. Group Project. Hack the North.</h4>",
                     video:"",
                     caption:"Tinder for restaurants, a webapp that allows users to browse through nearby restaurants on 'cards.' If connected to Leap Motion the webapp could interact with the user's hand gestures to move cards. Used Yelp API to acquire information about restaurants. Worked with a team of 4 at Hack the North.</p>",
                     link: "https://github.com/chelseakwong/FoodySlap",
                     linkDesc: "GitHub"
}

library.Iris = {
    img:["img_ME/Iris/Prototype.png",
        "img_ME/Iris/Progress.png"],
    video:"",
    details:"<h4>Aug. 2015 - Present. Personal Project.</h4>",
    caption:"<p>Work in progress. A personal dashboard webapp that displays tasks, emails, daily schedule, weather, and time on a dynamic background. Implemented with Express.js, Context.io API, Imgur API, Bootstrap, and Jquery plugins.</p>",
    link:"https://github.com/chelseakwong/IRIS",
    linkDesc:"See it on my Github"
}

library.LedLamp = {
    img:["img_ME/ledLamp/2.jpg","img_ME/ledLamp/1.jpg"],
    details:"<h4>July 2014. Personal Project.</h4>",
    caption:"<p>A summer project done in my free time. Programmed with a micro-controller, and constructed a circuit to create an interactive lamp that changes colors and patterns when someone touches it. Self-taught Arduino and USBASP programming to address LED strings in order to create different effects.</p>",
    link:"",
    video:'<iframe src="https://player.vimeo.com/video/99864380" width="580" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    linkDesc:""
}

library.TowerDefense = {
    img:["img_ME/towerDefense/1.png"],
    details:"<h4>Dec 2014. Class Project.</h4>",
    caption:"<p>Made for the intro computer science class, 15-112, at Carnegie Mellon University. A tower defense game implemented with PyGame in Python.</p>",
    link:"https://github.com/chelseakwong/Chelsea-s-Minimal-Tower-Defense",
    video:'<iframe src="https://player.vimeo.com/video/113585265" width="580" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    linkDesc: "GitHub"
}

library.KPL = {
    img:["img_ME/art/kplshirt.png"],
    details:"<h4>Dec 2013.</h4>",
    caption:"<p>Shirt design made for Kappa Phi Lambda.</p>",
    video:"",
    link:"",
    linkDesc:''    
}

library.phonecase = {
      img:["img_ME/art/phonecase1.jpg","img_ME/art/phonecase2.jpg"],
    details:"<h4>June 2013. Personal Project.</h4>",
    caption:"<p>First started as an art and graphic design project, then decided to put it on a phone case. Original art drawn with ink.</p>",
    video:"",
    link:"",
    linkDesc:''  
}

library.elkSculp = {
    img:["img_ME/art/elk.jpg"],
    details:"<h4>June 2014. Personal Project.</h4>",
    caption:"<p>Created with Illustrator.</p>",
    video:"",
    link:"",
    linkDesc:''  
}

library.asa = {
    img:["img_ME/art/asa1.jpg","img_ME/art/asa2.png","img_ME/art/asa3.jpg"],
    details:"<h4>Oct 2014. Community.</h4>",
    caption:"<p>Logo for ASA productions, a committee of Asian Student Association who creates videos to promote the organization.</p>",
    video:"",
    link:"",
    linkDesc:''  
}

library.gotFortune = {
    img:["img_ME/art/gotfortune.jpg"],
    details:"<h4>July 2014. Personal Project.</h4>",
    caption:"<p>A greeting card design</p>",
    video:"",
    link:"",
    linkDesc:''  
}

library.gestalt = {
    img:["img_ME/design/gestalt1.png","img_ME/design/gestalt2.jpg","img_ME/design/gestalt3.png","img_ME/design/gestalt4.png"],
    details:"<h4>Jan 2015. Class Project.</h4>",
    caption:"<p>A poster of gestalt compositions that represents different words. This is an introductory project done in the class Communication Design Fundamentals, exploring form and composition and learning about gestalt principles.  The project aims to portray words with only black squares. The words portrayed are, in order, 'order,' 'tension,' 'congestion,' 'playfulness,' and 'comfort.'</p> <p>This project’s purpose is to provide students an opportunity to understand gestalt principles and utilize them in design, which is to convey meaning through whole compositions, to read beyond their individual parts. </p><p>Some constraints on our creations are that the squares must be filled in with black, they cannot overlap, and the image cannot be a literal interpretation of the word.</p>",
    video:"",
    link:"https://chelseakwong.wordpress.com/gestalt-composition/",
    linkDesc:'Work Process'  
}

library.avenir = {
    img:["img_ME/design/avenir.png"],
    details:"<h4>Feb 2015. Class Project.</h4>",
    caption:"<p>A typography specimen poster for Avenir. This project was done in Communications Design Fundamentals class as an introduction to typography. The goal of the project was to leads us to appreciate the uniqueness of each typeface: how it is designed, its history, the details of each character in the typeface, the delicacy and effort put into designing each and every font.</p> <p>To do so, we are to create a type specimen poster that showcases our assigned font in a way we deem suitable and fitting. The typeface is chosen from a select list of classic fonts, and the poster is limited to a size of 10″ x 16″ printed on cardstock/30 lb paper.</p>",
    video:"",
    link:"https://chelseakwong.wordpress.com/avenir-typeface-specimen-poster/",
    linkDesc:'Work Process'  
}

library.book = {
    img:["img_ME/design/book1.jpg","img_ME/design/book2.png","img_ME/design/book3.png","img_ME/design/book4.png"],
    details:"<h4>March 2015. Class Project.</h4>",
    caption:"<p>A visual book that documents the different types of personality disorders. The objective of this project is to summarize and incorporate all that we have learned in the class, such as hierarchy, grid system, illustration, and use of colors, to create a bound book. </p>",
    video:"",
    link:"https://chelseakwong.wordpress.com/visual-book/",
    linkDesc:'Full book & Work Process'  
}

library.rif = {
    img:["img_ME/design/web1.jpg","img_ME/design/web2.jpg"],
    details:"<h4>April 2015. Class Project.</h4>",
    caption:"<p>A redesign of Reading is Fundamental Pittsburgh, a non-profit organization that helps improve literacy among children in Pittsburgh. There was a list of organizations we could choose from to redesign for, all of whom had inefficient websites currently, and our goal of the project is to not only make the websites more appealing, but also easily navigable and user-friendly.</p> <p>The requirements of the project were 1) we had to create at least two pages, one for the main home page, and another of a sub-page. 2) we have to include interaction in our design, showing how dynamic content will be shown to the users.</p>",
    video:"",
    link:"https://chelseakwong.wordpress.com/web-redesign-rif-pittsburgh/",
    linkDesc:'Work Process'  
}

library.cocktails = {
    img:["img_ME/design/fyeahcocktails.png"],
    details:"Sept 2015. Hackathon.",
    caption:"A simple website that displays a gallery of cocktails and how to make them. Used Yummly API for fetching cocktail ingredients. Created at Big Red Hacks.",
    video:"",
    link:"http://fyeah.co/",
    linkDesc:'Fyeah.co/cktails'  
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
    var caption = "<h4>"+library[title].details+"</h4>";
    if (library[title].link.length !=0){
        caption += "<a class='caption-link' href="+"'"+library[title].link+
            "'"+">" + "<span class='glyphicon glyphicon-link'></span> " + library[title].linkDesc + "</a>";
    }
    caption += "<hr><p>"+library[title].caption+"</p>";
    if (library[title].video.length != 0){
        caption += "<br>"+library[title].video;
    }
    return caption;
}