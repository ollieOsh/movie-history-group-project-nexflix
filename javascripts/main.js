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

// // Send movie data to db then reload DOM with updated song data
// $(document).on("click", ".watchlist", function() {
//   console.log("clicked add to watch list");
//   let movieID = /* id that corrilates to this movie */
//   mdb.addSong(songObj)
//   .then(function() {
//     loadSongsToDOM();
//   });
// });
