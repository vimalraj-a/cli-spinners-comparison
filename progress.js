var clui = require('clui');

var Progress = clui.Progress;

var thisProgressBar = new Progress(20);
for (let i = 0; i < 10; i++) {
    console.log(thisProgressBar.update(Number('.'+i)));    
}

var CLI = require('clui'),
    Spinner = CLI.Spinner;

var countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);

countdown.start();

var number = 10;
setInterval(function () {
  number--;
  countdown.message('Exiting in ' + number + ' seconds...  ');
  if (number === 0) {
    process.stdout.write('\n');
    process.exit(0);
  }
}, 1000);