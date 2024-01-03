const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => { 
  return tutorials.map((tutorial) => {
    // split each tutorial in array of words
    const words = tutorial.split(" ");
    // capitalize first letter of each word
    const titleCasedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return titleCasedWords.join(' ')
  });
  return tutorials
};

titleCased()