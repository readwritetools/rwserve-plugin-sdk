












<figure>
	<img src='/img/plugins/rwserve-plugin-sdk/rwserve-sdk-unsplash-pina-messina.jpg' width='100%' />
	<figcaption></figcaption>
</figure>

##### 

# Read Write Serve Plugin SDK

## Develop high quality RWSERVE plugins


<address>
<img src='/img/48x48/rwtools.png' /> by <a href='https://readwritetools.com' title='Read Write Tools'>Read Write Tools</a> <time datetime=2018-10-22>Oct 22, 2018</time></address>



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

### Prerequisites

This is a plugin for the **Read Write Tools HTTP/2 Server**, which works on Linux
platforms.


<table>
	<tr><th>Software</th> <th>Minimum Version</th> <th>Most Recent Version</th></tr>
	<tr><td>Ubuntu</td> 		<td>16 Xenial Xerus</td> <td>16 Xenial Xerus</td></tr>
	<tr><td>Debian</td> 		<td>9 Stretch</td> 		<td>10 Buster</td></tr>
	<tr><td>openSUSE</td>	<td>openSUSE 15.1</td> 	<td>openSUSE 15.1</td></tr>
	<tr><td>Fedora</td> 		<td>Fedora 27</td> 		<td>Fedora 32</td></tr>
	<tr><td>CentOS</td>		<td>CentOS 7.4</td>		<td>CentOS 8.1</td></tr>
	<tr><td>RHEL</td> 		<td>RHEL 7.8</td>		<td>RHEL 8.2</td></tr>
	<tr><td>RWSERVE</td>		<td>RWSERVE 1.0.1</td>	<td>RWSERVE 1.0.47</td></tr>
	<tr><td>Node.js</td>		<td>Node.js 10.3</td>	<td>Node.js 12.17</td></tr>
</table>

### License

The <span>rwserve-plugin-sdk</span> is licensed under the MIT
License.

<img src='/img/blue-seal-mit.png' width=80 align=right />

<details>
	<summary>MIT License</summary>
	<p>Copyright © 2020 Read Write Tools.</p>
	<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
	<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
	<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</details>

### Availability


<table>
	<tr><td>Source code</td> 			<td><a href='https://github.com/readwritetools/rwserve-plugin-sdk'>github</a></td></tr>
	<tr><td>Package installation</td> <td><a href='https://www.npmjs.com/package/rwserve-plugin-sdk'>NPM</a></td></tr>
	<tr><td>Documentation</td> 		<td><a href='https://hub.readwritetools.com/plugins/rwserve-plugin-sdk.blue'>Read Write Hub</a></td></tr>
</table>

