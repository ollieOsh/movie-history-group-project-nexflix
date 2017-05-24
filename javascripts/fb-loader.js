"use strict";

let firebase = require("./fb-config");

//add to watchlist is clicked - add this data to user FB
let addMovies = (movieObj) => {
    console.log("movieObj", movieObj);
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}`,
            type: "POST",
            data: JSON.stringify(movieObj),
            dataType: 'json'
        }).done(function(movieID) {
            resolve(movieID);
        });
    });
};

let getWatchedMovies = () => {
    //clicks show watched
    //watched view
    //stars appears under card
};

let removeFromFB = () => {
    //delete movie from users list of movies
};

let watchClick = () => {
//watch clicked - true or false on FB
//if true - append stars
//POST:
};

let starsClick = () => {
    //starts clicked - rating sent to FB
    //ammount of stars clicked needs to appear on the DOM
    //PATCH:
};

module.exports= {addMovies, getWatchedMovies, removeFromFB, watchClick, starsClick};


