"use strict";

let mdb = require('./mdb-loader');

// Get input value and pass it to .. searchMBD
$(document).on('click', '.find-new-movie', () => {
	let inputValue = $('.form-control').val();
	let movieName = inputValue.replace(/ /gi, '+');
	mdb.searchMDB(movieName)
	.then((value) => {
    	console.log('Input value is', movieName);

	});
	$('.form-control').val('');
});
