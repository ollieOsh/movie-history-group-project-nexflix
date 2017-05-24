"use strict";

let mdb= require("./mdb-getter");
let mdbData= mdb();

var mdbConfig={
    mdbKey: mdbData.apiKey,
    searchURL: mdbData.searchURL,
    popularURL: mdbData.popularURL,
    creditURL: mdbData.creditURL,
    endcreditURL: mdbData.endcreditURL,
    posterURL: mdbData.posterURL
};

let getMDBsettings= ()=>{
    return mdbConfig;
};

module.exports= {getMDBsettings};
