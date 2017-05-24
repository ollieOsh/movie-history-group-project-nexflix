"use strict";

let fb = require("./fb-loader");

function cardDelete() {
    //user clicks the x and card is deleted
    //movie is removed from users Firebase - call removeFromFB function
    fb.removeFromFB();
}
