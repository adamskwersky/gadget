/* push commander component
 * To use add require('../cmds/push.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('push')
		.version('0.0.0')
		.description('push the gadget to a dashboard server.')
		.action(function (/* Args here */) {
		    console.log("Will push the gadget to the server.")
			// Your code goes here
		});

};
