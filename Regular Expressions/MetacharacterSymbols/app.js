let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/; // Must end with
re = /^hello$/i; //Must begin with h and end with o
re = /^h.llo$/i; // Matches any ONE character
re = /gre?a?y/i;      // This means e is optional and a is optional

// To use ? as a literal, we need to use escape character, i.e. prefix the literal with back slash \ (example if I want =>  grey?)
re = /gre?a?y\?/i;

// String to match
const str = 'Hello World';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
