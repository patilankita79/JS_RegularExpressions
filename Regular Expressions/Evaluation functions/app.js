let re;

// Expression literal is enclosed between forward slashes.
re = /hello/;    //Each character is a literal charaacter

console.log(re);  // Output: /hello/
console.log(re.source);   // Output: hello

// exec() -> returns the result in an array if there is a match, otherwise it returns null
const result = re.exec('hello world');
console.log(result);   // Output: ["hello", index: 0, input: "hello world"]

console.log(re.exec('Welcome everyone!'));  // Output: null

// test() => returns true if there is a match otherwise it returns false
 const result2 = re.test('Hello');
 console.log(result2);    // Output: false

 console.log(re.test('hello'));   // Output: true

 // We can make the regular expression case insensitive by putting i flag
 // re = /hello/i;

 // match() => Return result array or null
 const str = 'Hello There';
 const result3 = str.match(re);
 console.log(result3);

// search() => returns the index of first match, otherwise returns -1
 console.log(str.search(re));

 // replace() => returns new string with some or all matches of a pattern
 const s1 = 'hello everyone'
 const newS1 = s1.replace(re, 'hi');
 console.log(newS1);
