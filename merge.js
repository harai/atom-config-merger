var cson = require('cson');
var merge = require('merge');
var fs = require('fs');

var configDir = process.env.HOME + '/.atom';
var myFile = configDir + '/my.config.cson';
var commonFile = configDir + '/common.config.cson';
var configFile = configDir + '/config.cson';

var myConfig = cson.parseFileSync(myFile);
var commonConfig = cson.parseFileSync(commonFile);

var config = merge.recursive(commonConfig, myConfig);

var configCson = cson.stringifySync(config);
fs.writeFileSync(configFile, configCson)
