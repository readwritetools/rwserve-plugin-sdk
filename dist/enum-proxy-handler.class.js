//=============================================================================
//
// File:         blue/src/enum/enum-proxy-handler.class.js
// Language:     ECMAScript 2015
// Copyright:    Joe Honton © 2017
// License:      CC-BY-NC-ND 4.0
// Initial date: Jan 18, 2017
// Contents:     A Proxy handler for enums
//
//=============================================================================

var expect = require('./expect.function.js');
var StackTrace = require('./stack-trace.class.js');
var log = require('./log.class.js');

module.exports = class EnumProxyHandler {
	
	constructor(enumName) {
		expect(enumName, 'String');
		this.enumName = enumName;
		Object.seal(this);
	}
	
	get(enumObject, enumProperty) {
		if (!enumObject.hasOwnProperty(enumProperty)) {
			var situs = StackTrace.getSitus(3);
			log.error(`No such enumerated value ${this.enumName}.${enumProperty} at ${situs}`);
		    return undefined;
		}
		return enumObject[enumProperty];
	}
}
