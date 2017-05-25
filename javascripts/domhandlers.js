"use strict";

let fb = require("./fb-loader");

function cardDelete() {
    //user clicks the x and card is deleted
    //movie is removed from users Firebase - call removeFromFB function
    fb.removeFromFB();
}

//user clicks "Add To Watchlist" - run addMovies
$(document).on('click', '.glyphicon', (event) => {
    console.log("glyphicon has been clicked");
    console.log("event", event);
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
