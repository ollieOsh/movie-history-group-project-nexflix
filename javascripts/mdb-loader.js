"use strict";

let movieDB= require("./mdb-config"),
    moviesArray = [];

function getPopular(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().popularURL}`
        }).done(function(movieData){
            movieData.results.forEach(function(element){
                let movieObj = buildMDBMovieObj(element);
                moviesArray.push(movieObj);
            });
            resolve(moviesArray);

        });
    });
}

function searchMDB(movieName) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${movieDB.getMDBsettings().searchURL}${movieName}`
        }).done(function(movie) {
            let searchMDBArray = [];
            movie.results.forEach(function(element){
                let searchMdbObj = buildMDBMovieObj(element);
                searchMDBArray.push(searchMdbObj);
            });
            resolve(searchMDBArray);
        });
    });
}
function getPoster(poster){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().posterURL}${poster}`

        }).done(function(img){
            console.log("poster", `${movieDB.getMDBsettings().posterURL}${poster}` );
            resolve(img);
        }).fail(function(error){
            console.log(error);
        });
    });
}


function getCredits (movieId){
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `${movieDB.getMDBsettings().creditURL}${movieId}${movieDB.getMDBsettings().endCreditURL}`
        }).done(function(credits){
            let actorsArray = [];
            var i;
            console.log("FUCKING CREDITS", credits.cast.length);
            if(credits.cast.length > 0){
                if(credits.cast.length < 4){
                    for (i = 0; i < credits.cast.length; i++){
                        actorsArray.push(credits.cast[i].name);
                    }
                }else {
                    for (i = 0; i < 4; i++){
                        actorsArray.push(credits.cast[i].name);
                    }
                }
            }
            resolve(actorsArray);
        });
    });
}

let buildMDBMovieObj = (element) => {
    let movieObj = {
                    title: `${element.title}`,
                    year: `${element.release_date}`,
                    id: `${element.id}`,
                    poster_path: `${element.poster_path}`,
                    mdb: "mdb"
                };
    return movieObj;
};

module.exports= {getPopular, searchMDB, getCredits, getPoster};