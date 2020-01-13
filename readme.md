







<table>
	<tr><th>Abstract</th></tr>
	<tr><td>The RWSERVE Plugin SDK comprises a small collection of functions, classes, and enums that allow you to develop high quality plugins that adhere to the basic design of the HTTP/2 server software.</td></tr>
</table>

### Motivation

Any RWSERVE plugin that you write will need a few basic tools in order to
operate nicely within the server environment. Use of these is not mandatory. You
are free to develop your plugin with your own set of helper functions.

#### Contents

   * `log` is a module for logging actions in a way that is compatible with the <a href='https://rwserve.readwritetools.com/logging.blue'>server's standard logging</a>
function.
   * `SC` is an enum for <a href='https://rwserve.readwritetools.com/status-codes.blue'>HTTP response status codes</a>
.
   * `expect` is a function for explicit argument type checking used in *design by
      contract* principles. It acts like a *soft assertion*, logging unmet expectations,
      but allowing your code to continue as best it can.

### Download

The SDK is available from <a href='https://www.npmjs.com/package/rwserve-plugin-sdk'>NPM</a>
. Before proceeding, you should already have `Node.js` and `RWSERVE` configured and
tested.

This module should be installed on your web server in a well-defined place, so
that it can be shared by all `RWSERVE` plugins. The standard location is `/srv/rwserve-plugins`
.

<pre>
cd /srv/rwserve-plugins
npm install rwserve-plugin-sdk
</pre>

### Usage

Use `require` within your codebase to access the SDK. Here's a simple
demonstration of a plugin that uses the SDK:

<pre>
const expect = require('rwserve-plugin-sdk').expect;
const log    = require('rwserve-plugin-sdk').log;
const SC     = require('rwserve-plugin-sdk').SC;

module.exports = class HelloWorldPlugin {
    constructor(hostConfig) {
        expect(hostConfig, 'HostConfig');
        expect(hostConfig.hostname, 'String');
        this.hostname = hostConfig.hostname;
        Object.seal(this);
    }
    async startup() {
        log.debug('HelloWorldPlugin', 'v1.0.0; © 2018 Read Write Tools; MIT License'); 
    }
    async shutdown() {
        log.debug('HelloWorldPlugin', `Shutting down ${this.hostname}`); 
    }
    async processingSequence(workOrder) {
        expect(workOrder, 'WorkOrder');
        try {
            workOrder.addStdHeader('hello-world', this.hostname);
            workOrder.setResponseBody(`Hello World ${this.hostname}`);
            workOrder.setStatusCode(SC.OK_200);
        }
        catch (err) {
            log.error(err.message);
        }
    }
}
</pre>

### License

The <span>rwserve-plugin-sdk</span> is licensed under the MIT
License.

### Availability


<table>
	<tr><td>Source code</td> 			<td><a href='https://github.com/readwritetools/rwserve-plugin-sdk'>github</a></td></tr>
	<tr><td>Package installation</td> <td><a href='https://www.npmjs.com/package/rwserve-plugin-sdk'>NPM</a></td></tr>
	<tr><td>Documentation</td> 		<td><a href='https://hub.readwritetools.com/plugins/rwserve-plugin-sdk.blue'>Read Write Hub</a></td></tr>
</table>

