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

// Brackets [] => Character sets
re = /gr[ae]y/i;  // Must be an a or e
re =/[GF]ray/; // Must be G or F
re = /[^GF]ray/;  // Match anything except G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} => Quantifiers
re =/hel{2}o/i;   // Must occur exactly {m} amount of times

re = /hel{2, 4}o/i;   // Must occur {m, n} amount of times

re = /hel{2, }o/i;   // Must occur atleast {m} amount of times

// Parentheses () => Grouping. Parentheses can be used with Quantifiers
re =/([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/;     // Word character - alphanumeric(any letter or any number) or _
re = /\w+/;    // + => one or more
re = /W/;      // Non-word character
re = /\d/;    // Match any digit
re = /\d+/;      // Match any digit 0 or more times
re = /\D/;       // Match any non-digit
re = /\s/;      // Match whitespace character
re = /\S/;      // Match non whitespace character
re = /hell\b/i;   // Word boundary

// Assertions
re = /x(?=y)/;    // Match x only if it is followed by y
re = /x(?!y)/;    // Match x only if it is not followed by y




// String to match
const str = 'Hello World';

// For testing brackets set str = 'Grey' or 'Gray';

// For testing the qunatifiers set str = 'Hello';

// For testing grouping set str = '3x3x3x';

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
