"use strict";

let movieDB = require("./mdb-config");

function getPopular(data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${movieDB.getMDBsettings().popularURL}`
        }).done(function(movieData) {
            resolve(movieData);
        });
    });
}

function searchMDB(movieName) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${movieDB.getMDBsettings().searchURL}${movieName}`
        }).done(function(movie) {
            console.log(movie);
            resolve(movie);
        });
    });
}
function getPoster(poster){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().posterURL}`
        }).done(function(img){
            resolve(img);
        });
    });
}

module.exports = { getPopular, searchMDB };
