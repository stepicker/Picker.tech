$(document).ready(function() {

// Subtitles

var subTitles = [
    "Entrepreneur",
    "Product Manager",
    "Web Developer",
    "Team Leader",
    "MBA with Honors",
    "Competitive Swimmer",
    "Ironman Triathlete",
    "Certified AcroYogi"
];

setTimeout(function() {
    $("#subtitle").html("<p class='animated fadeInUp'>" + subTitles[0] + "</p>");
}, 500);

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


// Portfolio
 
var portfolioImages = [
    "blockbuster.jpg",
    "la3.jpg",
    "tv-connect.jpg",
    "home-hub.jpg",
    "xfinity.jpg"
];

var indexNumber;
var shownImage;

var getRandomImage = function() {
    indexNumber = Math.floor(Math.random()*portfolioImages.length);
    shownImage = portfolioImages[indexNumber];
};

var populatePortfolio = function() {
    $("#portfolio-box").html("<img class='animated fadeIn' id='portfolio-img' src='./assets/images/portfolio/" + shownImage + "'><a href='#'><img id='left-arrow' src='./assets/images/left-arrow.png'></a><a href='#'><img id='right-arrow' src='./assets/images/right-arrow.png'></a>");
};

var shufflePortfolio = function() {
    setInterval(function() {
        getRandomImage();
        $("#portfolio-img").attr("src", "./assets/images/portfolio/" + shownImage);
    }, 24000);
};

$(document).on("click", "#left-arrow", function(){
    if (portfolioImages.indexOf(shownImage) === 0) {
        indexNumber = (portfolioImages.length - 1);
    }
    else {
        indexNumber = (indexNumber - 1);
    };
    shownImage = portfolioImages[indexNumber];
    populatePortfolio();
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
});

getRandomImage();
populatePortfolio();
shufflePortfolio();

});