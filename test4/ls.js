#!/usr/bin/env node
var fs = require("fs");
fs.readdir(".", function (err, files) {
    if (err) {
        return console.err(err);
    }
    files.forEach(function (file) {
        console.log(file)
    })
})