$(document).ready(function() {

// Subtitles

var subTitles = [
    "Entrepreneur",
    "Web Developer",
    "Product Manager",
    "Team Leader",
    "MBA w/ Honors"
];


$("#subtitle").html("<p class='animated fadeInUp'>" + subTitles[0] + "</p>");

var i = 1;

var loopSubTitles = function() {
    setTimeout(function() {
        $("#subtitle").html("<p class='animated fadeInUp'>" + subTitles[i] + "</p>");
        i++;
        if (i < subTitles.length) {
            loopSubTitles();
        }
        else {
            i = 0;
            loopSubTitles();
        }
    }, 3000);
};

loopSubTitles();


// Portfolio Loop on Home Page
 
var portfolioImages = [
    {
       name: "Blockbuster Italy - Web Portal",
       description: "As Client/Project Manager at LBi Italy, I directed the evolution of Blockbuster's on-line presence for over two years, from the first web portal to a complete e-commerce solution.",
       file: "blockbuster.jpg",
       type: "web"
    },
    {
        name: "La3 - Web Portal",
        description: "As Client/Project Manager at LBi Italy, I led a cross-functional team to develop in record time a brand-new web portal for the launch of 3 Italy’s Mobile TV, including a multi-feed online TV Guide.",
        file: "la3.jpg",
        type: "web"
    },
    {
        name: "Tv Connect ™",
        description: "As Senior Product Manager at Vodafone Italy, I led the end-to-end development of Vodafone Tv Connect ™, a hybrid set-top box with DTT tuners, DVR, Catch-up TV widgets, multi-screen experience and DLNA.",
        file: "tv-connect.jpg",
        type: "product"
    },
    {
        name: "HomeCloud ™",
        description: "As Global Product Manager at Vodafone Group, I directed an 18-month open innovation effort to develop Vodafone HomeCloud™, a digital storage device with real-time media transcoding, recipient of the Connected Home Design & Technology Innovation Award in 2012.",
        file: "home-hub.jpg",
        type: "product"
    },
    {
        name: "Xfinity Home - Device Ecosystem",
        description: "As Director of Product Management at Xfinity Home by Comcast, I led the end-to-end development of a new device ecosystem for Home Security and Automation, directing and coaching a team of Senior Managers while coordinating cross-functional programs.",
        file: "xfinity.jpg",
        type: "product"
    },
    {
        name: "Javascript Games",
        description: "Web-based games to solidify my learning of Javascript and jQuery, created during my first two months at the Penn Web Development Bootcamp",
        file: "js-games.jpg",
        github: "https://github.com/stepicker/TriviaGame",
        type: "web"
    },
    {
        name: "Movie Picker",
        description: "Personal project using a combination of Javascript and APIs to create a movie search-engine, play trailers and allow users to save a wish-list of movies to watch.",
        file: "movie-picker.jpg",
        github: "https://github.com/stepicker/Movie-Picker",
        type: "web"
    }
];

var indexNumber;
var shownImage;

var getRandomImage = function() {
    indexNumber = Math.floor(Math.random()*portfolioImages.length);
    shownImage = portfolioImages[indexNumber];
};

var populatePortfolio = function() {
    $("#portfolio-box").html("<img class='portfolio-img animated fadeIn' id='portfolio-img' title='" + shownImage.name + "' src='./assets/images/portfolio/" + shownImage.file + "'><img id='left-arrow' src='./assets/images/left-arrow.png'><img id='right-arrow' src='./assets/images/right-arrow.png'>");
};

var loopDuration = subTitles.length * 3000;

var shufflePortfolio = setInterval(function() {
        getRandomImage();
        $("#portfolio-img").attr("src", "./assets/images/portfolio/" + shownImage.file);
    }, loopDuration);

$(document).on("click", "#left-arrow", function(){
    if (portfolioImages.indexOf(shownImage) === 0) {
        indexNumber = (portfolioImages.length - 1);
    }
    else {
        indexNumber = (indexNumber - 1);
    };
    shownImage = portfolioImages[indexNumber];
    populatePortfolio();
    clearInterval(shufflePortfolio);
});

$(document).on("click", "#right-arrow", function(){
    if (portfolioImages.indexOf(shownImage) === (portfolioImages.length - 1)) {
        indexNumber = 0;
    }
    else {
        indexNumber = (indexNumber + 1);
    };
    shownImage = portfolioImages[indexNumber];
    populatePortfolio();
    clearInterval(shufflePortfolio);
});

getRandomImage();
populatePortfolio();


// Portfolio Page

for (var j = 0; j < portfolioImages.length; j++) {

    if (portfolioImages[j].type === "web" && portfolioImages[j].github) {
        $("#portfolio-container").prepend("<div class='portfolio-item portfolio-web'><img class='portfolio-img' src='./assets/images/portfolio/" + portfolioImages[j].file + "'><div class='portfolio-overlay'><h4>" + portfolioImages[j].name + "</h4><h5>" + portfolioImages[j].description + "</h5><a href='" + portfolioImages[j].github + "' target='_blank'><div id='see-on-github'><span>See the code</span><img src='./assets/images/github.png' id='github-icon'></div></a></div></div>");
    }
    else if (portfolioImages[j].type === "web") {
        $("#portfolio-container").prepend("<div class='portfolio-item portfolio-web'><img class='portfolio-img' src='./assets/images/portfolio/" + portfolioImages[j].file + "'><div class='portfolio-overlay'><h4>" + portfolioImages[j].name + "</h4><h5>" + portfolioImages[j].description + "</h5></div></div>");
    }
    else if (portfolioImages[j].type === "product") {
        $("#portfolio-container").prepend("<div class='portfolio-item portfolio-product'><img class='portfolio-img' src='./assets/images/portfolio/" + portfolioImages[j].file + "'><div class='portfolio-overlay'><h4>" + portfolioImages[j].name + "</h4><h5>" + portfolioImages[j].description + "</h5></div></div>");
    };

};

$(".tab-links").on("click", function() {
    if ($(this).data("name") === "all-button") {
        $(".portfolio-web").show();
        $(".portfolio-product").show();
        $(".tab-links").removeClass("tab-selected");
        $(this).addClass("tab-selected");
    }
    else if ($(this).data("name") === "web-button") {
        $(".portfolio-web").show();
        $(".portfolio-product").hide();
        $(".tab-links").removeClass("tab-selected");
        $(this).addClass("tab-selected");
    }
    else if ($(this).data("name") === "product-button") {
        $(".portfolio-web").hide();
        $(".portfolio-product").show();
        $(".tab-links").removeClass("tab-selected");
        $(this).addClass("tab-selected");
    };
});


});