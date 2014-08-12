var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfLessThan(el1, el2, callback){
  reader.question("Is "+el1+" > "+el2+"?", function(answer){
    if(answer === "yes"){
      callback(true);
    }
    else{
      callback(false);
    }
    // reader.close();
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i < arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if(i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfLessThan(arr[i], arr[i + 1], function(isLessThan){
      if(isLessThan) {
        var holder = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = holder;
        innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
      }
      else {
        innerBubbleSortLoop(arr, i+1, false, outerBubbleSortLoop);
      }
    });
  }

  // 2. Else, use `askIfLessThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }

  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});