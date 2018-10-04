const ora = require('ora');

const spinner = new ora({
	text: 'Loading unicorns',
	spinner: process.argv[2]
});

const spinner2 = new ora({
	text: 'Loading unicorns2',
	spinner: process.argv[2]
});

spinner.start();

setTimeout(() => {
    spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
    spinner.succeed();
    spinner2.start();
}, 2000);