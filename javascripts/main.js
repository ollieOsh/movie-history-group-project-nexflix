"use strict";

let Handlebars = require('hbsfy/runtime'),
	mdb = require('./mdb-loader.js'),
	moviesTemplate = require('../templates/populatemovies.hbs');

let comboObj = [];

let loadMoviesToDom = () => {
	mdb.getPopular().
	then(function(songData){
		console.log("popular", songData);
		songData.forEach(function(element){
			var newObj = {};
			newObj.movie = element.title;
			newObj.year = element.year;
			mdb.getCredits(element.id)
			.then(function(actors){
				newObj.cast = actors;
				comboObj.push(newObj);
			});
		});
		// console.log("comboObj", comboObj);
	}).
	then(function(){
		console.log("comboObj", comboObj);
		console.log("movie", comboObj[0]);
		$("#outputArea").html(moviesTemplate(comboObj));
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