"use strict";

let fb = require("./fb-loader");

function cardDelete() {
    //user clicks the x and card is deleted
    //movie is removed from users Firebase - call removeFromFB function
    fb.removeFromFB();
}

//user clicks "Add To Watchlist" - run addMovies
$(document).on('click', '.glyphicon', () => {
    console.log("glyphicon has been clicked");
    var title = event.target.find("h3");
    console.log("title", title);
    var object = event.target;
    console.log("object", object);
    // fb.addMovies();
});

//user clicks on the stars - run starsClick
$(".stars").click(function() {
    fb.starsClick();
});

//user clicks show unwatched movies
$(".unwatched").click(function() {
    fb.getUnwatchedMovies();
});

//user clicks show watched movies
$(".watched").click(function() {
    fb.getUnwatchedMovies();
});

//user clicks show favorite movies
$(".favorite").click(function() {
    fb.getUnwatchedMovies();
});
