const userInput = process.argv.sort().slice(2);
// console.log('userInput :', userInput);

//capture the elements of the array with the times set by user
//loop thru each of them, and setInterval delay to beep at every iteration of that array

for (const element of userInput) {
// console.log('userInput :', userInput);
  if (!isNaN(element) && element > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);
  }
}
    
