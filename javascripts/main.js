"use strict";

let Handlebars = require('hbsfy/runtime'),
	mdb = require('./mdb-loader.js'),
	moviesTemplate = require('../templates/populatemovies.hbs');
let user = require("./user");

let comboObj = {
	movies: []
};

Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

let loadMoviesToDom = () => {
	mdb.getPopular().
	then(function(songData){
		console.log("popular", songData);
		songData.forEach(function(element){
			var newObj = {};
			// console.log("element", element);
			newObj.movie = element.title;
			newObj.year = element.year;
			newObj.id = element.id;
			mdb.getCredits(element.id)
			.then(function(actors){
				// console.log("actors", actors);
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



//user login
$("#register-login").click(function() {
  console.log("clicked on register-login");
  user.logInGoogle()
  .then(function(result) {
    console.log("result from Login", result.user.uid);
    user.setUser(result.user.uid);
    // loadMoviesToDom();
    $("#splashNav").addClass("hide");
    $("#loggedInNav").removeClass("hide");
    $("#watchedButtons").removeClass("hide");
  });
});

//user logout
$("#logout").click(function() {
    console.log("logout clicked");
    user.logOut();
    $("#splashNav").removeClass("hide");
    $("#loggedInNav").addClass("hide");
    $("#watchedButtons").addClass("hide");
});


// Get input value and pass it to .. searchMBD
$(document).on('click', '.find-new-movie', () => {
	let inputValue = $('.form-control').val();
	let movieName = inputValue.replace(/ /gi, '+');
	mdb.searchMDB(movieName)
	.then((value) => {
    	console.log('Input value is', movieName);
	});
});
