//=============================================================================
//
// File:         rwserve-plugin-sdk/src/enum-proxy-handler.class.js
// Language:     ECMAScript 2017
// Copyright:    Read Write Tools © 2018
// License:      MIT License
// Initial date: Sep 10, 2018
// Contents:     A Proxy handler for enums
//
//=============================================================================

import expect			from './expect.function';
import StackTrace	 	from './stack-trace.class';
import log				from './log.class';

export default class EnumProxyHandler {
	
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
