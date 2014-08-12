var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft === 0){
    completionCallback(sum);
  }else if(numsLeft > 0){
    reader.question("Enter in a number: ", function(numString){
      var num = parseInt(numString);
      sum += num;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);

    });
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});