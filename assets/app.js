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
       name: "Blockbuster",
       file: "blockbuster.jpg",
       type: "web"
    },
    {
        name: "La3",
        file: "la3.jpg",
        type: "web"
    },
    {
        name: "Tv Connect",
        file: "tv-connect.jpg",
        type: "product"
    },
    {
        name: "Home Hub",
        file: "home-hub.jpg",
        type: "product"
    },
    {
        name: "Xfinity Home",
        file: "xfinity.jpg",
        type: "product"
    },
    {
        name: "Javascript Games",
        file: "js-games.jpg",
        type: "web"
    },
    {
        name: "Giphy API",
        file: "giphy-api.jpg",
        type: "web"
    },
    {
        name: "Movie Wish List",
        file: "movie-wish-list.jpg",
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
    if (portfolioImages[j].type === "web") {
        $("#portfolio-container").prepend("<div class='portfolio-item portfolio-web'><img class='portfolio-img' src='./assets/images/portfolio/" + portfolioImages[j].file + "' title='" + portfolioImages[j].name + "'></div>");
    }
    else if (portfolioImages[j].type === "product") {
        $("#portfolio-container").prepend("<div class='portfolio-item portfolio-product'><img class='portfolio-img' src='./assets/images/portfolio/" + portfolioImages[j].file + "' title='" + portfolioImages[j].name + "'></div>");
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