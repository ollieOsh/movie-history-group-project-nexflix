"use strict";

let movieDB= require("./mdb-config"),
    moviesArray = [];

function getPopular(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().popularURL}`
        }).done(function(movieData){
            movieData.results.forEach(function(element){
                let movieObj = {
                    title: `${element.title}`,
                    year: `${element.release_date}`,
                    id: `${element.id}`
                };
                moviesArray.push(movieObj);
            });
            resolve(moviesArray);
        });
    });
}

function searchMDB(movieName){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().searchMDB}${movieName}`
        }).done(function(movie){
            resolve(movie);
        });
    });
}

function getCredits (movieId){
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().creditURL}${movieId}${movieDB.getMDBsettings().endCreditURL}`
        }).done(function(credits){
            let actorsArray = [];
            for (var i = 0; i < 4; i++){
                actorsArray.push(credits.cast[i].name);
            }
            resolve(actorsArray);
        });
    });
}

module.exports= {getPopular, searchMDB, getCredits};


