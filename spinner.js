const cliSpinners = require('cli-spinners');
const logUpdate = require('log-update');
var spinner = cliSpinners.dots;
let i = 0;
setInterval(() => {
	var frames = spinner.frames;
	logUpdate(frames[i = ++i % frames.length] + ' Unicorns',+ '\n'+frames[i = ++i % frames.length] + ' Vimal');
}, spinner.interval);