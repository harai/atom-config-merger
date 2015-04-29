var cson = require('cson');
var merge = require('merge');
var fs = require('fs');

var configDir = process.env.HOME + '/.atom';
var myFile = configDir + '/my.config.cson';
var commonFile = configDir + '/common.config.cson';
var configFile = configDir + '/config.cson';

var myConfig = cson.parseCSONFile(myFile);
var commonConfig = cson.parseCSONFile(commonFile);

var config = merge.recursive(commonConfig, myConfig);

var configCson = cson.stringify(config);
fs.writeFileSync(configFile, configCson)
