//loop through the input array and output an alarm after each specified time has passed
//node timer1.js 10 3 5 15 9 will beep at 3 secs, 5 secs...
let time = 0;
let input = process.argv.slice(2).sort();
const alarm = (input) => {
  for (let element of input) {
    if (input.length === 0) {
      return;
    }
    if (element > 0 && Number(element)) {
      setTimeout( () => process.stdout.write('\x07'), time += element * 1000);
    }
}
setTimeout(() => process.stdout.write('\n'), 2000);
};
alarm(input);
