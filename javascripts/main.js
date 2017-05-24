"use strict";

let Handlebars = require('hbsfy/runtime'),
	mdb = require('./mdb-loader.js'),
	moviesTemplate = require('../templates/populatemovies.hbs');

let comboObj = {
	movies: []
};

let loadMoviesToDom = () => {
	mdb.getPopular().
	then(function(songData){
		console.log("popular", songData);
		songData.forEach(function(element){
			var newObj = {};
			console.log("element", element);
			newObj.movie = element.title;
			newObj.year = element.year;
			newObj.id = element.id;
			mdb.getCredits(element.id)
			.then(function(actors){
				console.log("actors", actors);
				newObj.cast = actors;
				comboObj.movies.push(newObj);
				// console.log("comboObj", comboObj);
				$("#outputArea").html(moviesTemplate(comboObj));
			});
		});
	});

};
let fivefifty = "550";
let getCreditData = (movieId) => {
	mdb.getCredits(movieId)
	.then(function(creditData){
		console.log("creditData", creditData);
	});
};
loadMoviesToDom();
// getCreditData(fivefifty);
// mdb.creditsURL(fivefifty);