/* package commander component
 * To use add require('../cmds/package.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('package')
		.version('0.0.0')
		.description('package the gadget.')
		.action(function (/* Args here */) {
            console.log("Will package the gadget in a zip.")
			// Your code goes here
		});

};
