/* create commander component
 * To use add require('../cmds/create.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

/* can use yeoman:environment package to invoke yeoman from the this tool */
/* http://yeoman.io/authoring/integrating-yeoman.html */

module.exports = function(program) {

	program
		.command('create')
		.description('Create a new gadget project')
		.option("-S, --scaffold <value>", "scaffold for new gadget")
		.option("-g, --gadget-name <value>", "name of the new gadget")
        .action(function (commandArgs) {
		    console.log("Will build gadget: " + commandArgs.gadgetName + " from scaffold " + commandArgs.scaffold);
		    // Invoke the yeoman generator here with the appropriate scaffolding.
		});
};
