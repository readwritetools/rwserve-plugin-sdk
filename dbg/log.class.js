//=============================================================================
//
// File:         rwserve-plugin-sdk/src/log.class.js
// Language:     ECMAScript 2017
// Copyright:    Read Write Tools © 2018
// License:      MIT License
// Initial date: Sep 10, 2018
// Contents:     Logging with identifier prefix
//
//=============================================================================

var expect = require('./expect.function.js');

module.exports = class Log {

	static network(message)				{ return Log.write('network ', message); }
	static config(message)				{ return Log.write('config  ', message); }
	static header(identifier, message)	{ return Log.write(identifier, message); }		// 'request' || 'staging' || 'info' || 'response'
	static error(message)				{ return Log.write('error   ', message); }
	static cluster(message)				{ return Log.write('cluster ', message); }
	static debug(method, message)		{ return Log.write('debug   ', method.padEnd(26).substr(0, 25) + message); }
			
	static write(identifier, message) {
    	expect(identifier, 'String');
    	expect(message, 'String');
		process.stdout.write(identifier + ' ' + message + '\n');
		return message;
	}
	
    static caught(err) {
    	if (err instanceof Error) {
    		Log.write('catch   ', err.message);
    		var stackTrace = err.stack.split("\n");
    		for (let i=0; i < stackTrace.length-2; i++)
    			process.stdout.write(stackTrace[i] + '\n');
    	}
    	else if (err.constructor.name == 'String')
    		return Log.write('catch   ', err);
    	else
    		return Log.write('catch   ', errtoString());
    }
}

/*
	syslog levels:	"emerg" (0), "alert" (1), "crit" (2), "err" (3), "warning" (4), "notice" (5), "info" (6), "debug" (7). 
*/

