#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var homedir = require('os').homedir();
var files = [".bashrc", ".bash_aliases", ".bash_env"];


console.log("installing...");

// Remove existing files
console.log('removing old bash config files...');

for (var i = 0; i < files.length; i ++) {
	console.log(`removed ${files[i]}`)
	console.log(files[i], path, homedir)
	fs.unlinkSync(path.join(homedir, files[i]))
};

console.log('bash config files removed.');

// Add symlinks
console.log('adding symlinks...')
for (var i = 0; i < files.length; i ++) {
	console.log(`symlinking files ${files[i]}`)
	fs.symlinkSync(path.join(homedir, files[i]))
};
console.log("symlinks done.")
console.log("test done")

