"use strict";

function getMDBKey(){
    return {
        apiKey: "c5c6876138711da8b6618fa62fee6117",
        searchURL: "https://api.themoviedb.org/3/search/movie?api_key=c5c6876138711da8b6618fa62fee6117&query=",
        popularURL: "https://api.themoviedb.org/3/movie/popular?api_key=c5c6876138711da8b6618fa62fee6117&language=en-US&page=1",
        creditURL: "https://api.themoviedb.org/3/movie/",
        endCreditURL: "/credits?api_key=c5c6876138711da8b6618fa62fee6117",
        posterURL: "https://image.tmdb.org/t/p/w500/$%7Bposter_path%7D"
    };
}

module.exports= getMDBKey;
