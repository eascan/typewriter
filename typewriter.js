// const sentence = "hello there from lighthouse labs";

const printSentence = (sentence) => {
  let interval = 0;
  
  for (let i = 0; i < sentence.length; i++) {
    if (i !== sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
      }, interval);
      interval += 0050;
    } else if (i === sentence.length - 1) {
      setTimeout(() => {
        console.log(sentence[i]);  
      }, interval);
    }
  }
}

printSentence("hello there from lighthouse labs");