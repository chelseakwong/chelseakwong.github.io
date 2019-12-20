/*

    All portfolio items listed below with respective positions 
    in folders

*/
var library = {};

library.presidentVideo = {
    img: ["img_ME/presidentScreenshot.png"],
    details: "May 2016",
    video: '<iframe src="https://player.vimeo.com/video/165109329" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    caption: "This program finds the 25 most frequently said words in a select set of presidential speeches from AmericanRhetoric.com, and compiles the results into a video with a Python script. This project was made during the election season of 2016, and the political climate inspired me to investigate past presidential speeches, juxtaposing different presidents speaking the same words.<br><br>Several different open source programs were integrated to create the sequence of clips. First, I used BeautifulSoup.py to scrape presidential speech transcripts and their videos from AmericanRhetoric.com. Then I used Gentle Forced Aligner to process each speech, extracting the time when each word is spoken to a JSON file. Having transcripts, videos, and JSON files of when words are said in the transcript for each video, I then wrote a Python program that found the most common words in these speeches, phrases containing these words, and sentences containing these words. I experimented with different permutations to present the data and ultimately settled on just using the words themselves, not the encapsulating sentence or phrase, emphasizing the difference in expression rather than context. I used Movie.py to string together clips from each video in a sequence.",
    link: "https://github.com/chelseakwong/PresidentialWords",
    linkDesc: "Code on Github"
}

library.megakanji = {
    img: ["img_ME/megakanji/angry_chars_comp.jpg",
                          "img_ME/megakanji/sample.png"],
    details: "April 2016",
    video: "",
    caption: "This is a Mega Kanji generator that combines similar meaning Japanese kanjis together to form a new kanji (I termed it ‘Mega Kanji’— these aren't real, fyi.) The inspiration for this project came from childhood, as I had to learn to write Chinese characters (relevant because Japanese Kanji is a deviation from the original/ancient Chinese form), — each stroke in a character must be in order and with the appropriate distance between strokes. So, coming across the KanjiVG database motivated me to investigate the possibilities of creating new characters. <br><br> This program combines similar-meaning kanjis to form a new kanji. Above shows 10 different iterations. I referenced the machine-learning algorithm that @hardmaru had already written for the @NeoKanji twitter bot, and appropriated different parameters and adjustments to fit my purpose. My script trains the machine with a set of kanjis (only those that mean angry in this example), so that the machine biases heavily on the ways the strokes of 'angry' kanjis are drawn. Afterwards, the machine will sample new SVG's and, because of the way it is trained and biased, it will generate conglomerate, mega-kanjis. ",
    link: "https://github.com/chelseakwong/MegaKanji",
    linkDesc: "Code on Github"
}

library.tragedies = {
    img: ["img_ME/tragedies/bentorodrigues_comp.jpg",
                          "img_ME/tragedies/chennaifloods_comp.jpg",
                          "img_ME/tragedies/gaza_comp.jpg",
                          "img_ME/tragedies/parisattacks_comp.jpg",
                          "img_ME/tragedies/shenzhenlandslide_comp.jpg",
                          "img_ME/tragedies/chennaifloods_comp.jpg",
                          "img_ME/tragedies/tianjin_comp.jpg"],
    details: "March 2016",
    video: "",
    caption: "This project was created to visualize the colors of tragic events happening in 2015, to decontextualize the tragedies by extracting only the colors from photos taken of these events. This is an exploration to see if images from social media correlate strongly to the actual images happening— what would it look like if I juxtapose these grids of colors of disasters next to each other. Would we be able to relate events to colors with some context? I handpicked 7 events from 2015 that had a lot of media coverage such that I had sufficient data points to draw accurate results: Paris Attacks, Gaza Conflict, TianJin Factory Explosions, ShenZhen Landslide, Chennai Floods, and Bento Rodrigues dam disaster. <br> <br>To achieve this, I wrote an image scraper that collected images from Instagram corresponding to each event with parameters of hashtags and geographical location, and I also wrote a color-extractor that does the following: for each set of images from an event, calculate the top 100 colors across all images, sort them by frequency of appearance, and at last, list these colors as thumbnails in a grid.",
    link: "https://github.com/chelseakwong/InstaColorCollector",
    linkDesc: "Code on Github"
}

library.AudioLight = {
    img: ["img_ME/audioLight.png"],
    details: "Jan 2016",
    video: "<iframe src='https://player.vimeo.com/video/153323520' width='580' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
    caption: "This is an Audio Visualizer, the color dots on the wheel enlarge and blur when there is a sudden spike in volume in the audio. The color light wheel dots are all primary CYMK colors, and so when the circles overlap each other they create new colors based on which other ones they are overlapping with.",
    link: "https://github.com/chelseakwong/Audio-Visualizer",
    linkDesc: "Code on Github"
}

library.GenerativePolygonArt = {
    img: ["img_ME/genArt/1.png", "img_ME/genArt/2.png", "img_ME/genArt/3.png", "img_ME/genArt/4.png", "img_ME/genArt/5.png"],
    details: "<h4>Jan 2016</h4>",
    video: "",
    caption: "This is a polygon art generator bot that posts to Twitter every hour. This bot creates a new piece of polygon art computationally, and automates this process and posts a new piece to Twitter every hour. The bot is written in Processing and Node.js, and it is hosted on an Ubuntu server provided by Digital Ocean. There was some tuning to be done with the color palette, but I was pleasantly surprised by the visual effects that emerged from simple parameters such as shading and camera angle.",
    link: "https://twitter.com/polyartbot",
    linkDesc: "Twitter Bot"
}

library.Prepper = {
    img: ["img_ME/Prepper/main_screen.jpg",
                       "img_ME/Prepper/main_all.jpg",
                       "img_ME/Prepper/grocery.jpg",
                        "img_ME/Prepper/scanreceipt.jpg",
                       "img_ME/Prepper/couponlist.jpg",
                       "img_ME/Prepper/recipes.jpg",
                       "img_ME/Prepper/recipepage.jpg"],
    details: "<h4>Oct 2014 - June 2015</h4> <h4>SASE Innoservice National Competition. Finalist. </h4>",
    video: "",
    caption: "Prepper is a personalized recipe mobile application, designed to change how we prepare, consume, and purchase meals. Its purpose is to save the user time and money and promote healthy eating. This is accomplished through its Recipe, Inventory, and Grocery List functions. The digital inventory can be updated by scanning grocery receipts and item barcodes, or by manual entry. A unique feature of Prepper is the notification of item expiration dates to reduce food waste. Recipes are automatically generated according to the items currently in the user’s inventory. These recipes can be filtered by categories such as calorie content, cook time, and ingredient expiration date. When an item is used up, it is automatically sent to a manageable To-Buy list to ease the burden of grocery shopping. Our team of 6 designed this product for the Society of Asian Scientists and Engineers annual nationwide Innoservice competition.",
    link: "documents/PrepperFinalReport.pdf",
    linkDesc: "Product Final Report"
}

library.phonecase = {
    img: ["img_ME/art/phonecase1.jpg", "img_ME/art/phonecase2.jpg"],
    details: "June 2013",
    caption: "First started as an art and graphic design project, then decided to put it on a phone case. Original art drawn with ink.",
    video: "",
    link: "",
    linkDesc: ''
}

library.gotFortune = {
    img: ["img_ME/art/gotfortune.jpg"],
    details: "July 2014",
    caption: "Have a good one :)",
    video: "",
    link: "",
    linkDesc: ''
}

library.book = {
    img: ["img_ME/design/book1.jpg", "img_ME/design/book2.png", "img_ME/design/book3.png", "img_ME/design/book4.png"],
    details: "March 2015",
    caption: "<p>A visual book that documents the different types of personality disorders. The objective of this project is to summarize and incorporate communication design fundamentals such as hierarchy, grid system, illustration, and use of colors, to create a bound book. </p>",
    video: "",
    link: "img_ME/personality_disorders.pdf",
    linkDesc: 'Full work in PDF'
}
// fetch single video or series of images for carousel
// also set height of .modal-body accordingly
function getHtmlImg(title) {
    var tot = "";
    if (library[title].video != "") {
        tot += (library[title].video + "</div>");
        $(".modal-body").css("height", "auto");
    } else {
        $(".modal-body").css("height", "70%");
        for (i = 0; i < library[title].img.length; i++) {
            if (i == 0) {
                var imgSrc = "<img src='" +
                    (library[title].img[i]) +
                    "'/></div>";
                tot += imgSrc;
            } else {
                var div = "<div><img src='" +
                    (library[title].img[i]) +
                    "'/></div>";
                tot += div;
            }
        }
    }
    return tot;
}

function getCaption(title) {
    var caption = "<h4 class='details'>" + library[title].details + "</h4>";
    if (library[title].link.length != 0) {
        caption += "<a class='caption-link' href=" + "'" + library[title].link +
            "'" + ">" + "<span class='glyphicon glyphicon-link'></span> " + library[title].linkDesc + "</a>";
    }
    caption += "<hr><p>" + library[title].caption + "</p>";
    return caption;
}
