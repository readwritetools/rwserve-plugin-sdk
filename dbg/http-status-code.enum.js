//=============================================================================
//
// File:         rwserve-plugin-sdk/http-status-code.enum.js
// Language:     ECMAScript 2017
// Copyright:    Read Write Tools © 2018
// License:      MIT License
// Initial date: Sep 10, 2018
// Contents:     HTTP response status codes
//
//=============================================================================

var EnumProxyHandler = require('./enum-proxy-handler.class.js');

var HttpStatusCode = {
		OK_200:						200,
	    CREATED_201:				201,
	    NO_CONTENT_204:				204,
	    PARTIAL_CONTENT_206:		206,
	    MULTI_STATUS_207:			207,
		FOUND_302:					302,
		SEE_OTHER_303:				303,
		NOT_MODIFIED_304:			304,
		BAD_REQUEST_400:			400,
		FORBIDDEN_403:				403,
		NOT_FOUND_404:				404,
		METHOD_NOT_ALLOWED_405:		405,
		NOT_ACCEPTABLE_406:			406,
		CONFLICT_409:				409,
		LENGTH_REQUIRED_411:		411,
		PRECONDITION_FAILED_412:	412,
		PAYLOAD_TOO_LARGE_413:		413,
		URI_TOO_LONG_414:			414,
		UNSUPPORTED_MEDIA_TYPE_415:	415,
		RANGE_NOT_SATISFIABLE_416:	416,
		INTERNAL_SERVER_ERROR_500:	500,
		NOT_IMPLEMENTED_501:		501
};
Object.seal(HttpStatusCode);

module.exports = new Proxy(HttpStatusCode, new EnumProxyHandler('HttpStatusCode'));
