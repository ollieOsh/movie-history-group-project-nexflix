"use strict";

let user = require("./user");


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

//user clicks unwatched search filter and breadcrumbs appear
$("#untracked").click(function() {
    $("#breadcrumb").html(`<li class="search-results">Search Results</li>`);
});

//user clicks unwatched search filter and breadcrumbs appear
$("#unwatched").click(function() {
    $("#breadcrumb").html(`<li class="search-results">Search Results</li>`);
    $("#breadcrumb").append(`<li class="search-results">Unwatched</li>`);
});

//user clicks watched search filter and breadcrumbs appear
$("#watched").click(function() {
    $("#breadcrumb").html(`<li class="search-results">Search Results</li>`);
    $("#breadcrumb").append(`<li class="search-results">Unwatched</li>`);
    $("#breadcrumb").append(`<li class="search-results">Watched</li>`);
});

//user clicks favorites search filter and breadcrumbs appear
$("#favorites").click(function() {
    $("#breadcrumb").html(`<li class="search-results">Search Results</li>`);
    $("#breadcrumb").append(`<li class="search-results">Unwatched</li>`);
    $("#breadcrumb").append(`<li class="search-results">Watched</li>`);
    $("#breadcrumb").append(`<li class="search-results">Favorites</li>`);
});
