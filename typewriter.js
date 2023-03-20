//---- Animated sentence ------

let sentence = "hello there from lighthouse labs";
let n = 0;

for(let i = 0 ; i < sentence.length; i++) {

  setTimeout(() => {
    // check fot the last element, to add the new line at the end of sentence
    if(i === (sentence.length - 1)) {
      process.stdout.write(sentence[i] + "\n");
    } else {
      process.stdout.write(sentence[i]);
    }
  }, n += 50);

}


