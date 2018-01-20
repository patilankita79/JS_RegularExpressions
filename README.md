# JS_RegularExpressions
Learning about regular expressions in JavaScript<br>
Check the console if you download and run this project 
<hr>

- Regular Expression is basically used to describe pattern of characters
- It is commonly used for
  - Pattern Searching 
  - Pattern Matching
  - Validation
  - Pulling information out of body of text or body of characters
- We can use flags in regular expression
  - flag i is used to make a regular expression case insensitive
  - flag g is used for global search (searches all instances of the word)
 
### Different functions in JavaScript that are used to evaluate the Regular Expressions

1. **exec()** => returns the result in an array if there is a match, otherwise it returns null
2. **test()** => returns true if there is a match otherwise it returns false
3. **match()** => returns result array or null
4. **search()** => returns the index of first match, otherwise returns -1
5. **replace()** => returns new string with some or all matches of a pattern

### Metacharacter Symbols

- Use of symbol ^ before => Must start with
- Use of Symbol $ after => Must end with
- Use of symbol . => Matches any ONE character
- Use of symbol * => Matches any character 0 or more
- Use of Symbol ? => Optional character. It is put after the optional character
- Use of symbol / => EScape character

```

/^h/            // Must start with h (Case sensitive)
/^h/i           // Must start with h (Case insensitive)
/n$/            //  Must end with n
/hello/i        //  Must begin with h and end with o
/h.llo/i;       // Matches any ONE character
/h*llo/i;       // Matches any character 0 or more
/gre?a?y/i      // This means e is optional and a is optional

// To use ? as a literal, we need to use escape character, i.e. prefix the literal with back slash \ (example if I want =>  grey?)
/gre?a?y\?/


```

### Character Sets and Quantifiers

```
Brackets [] => Character sets
Braces {} => Quantifiers
Parentheses () => Grouping

```

### Shorthand Character Classes

If we we want to search for a word character or digit or white space character shorthand character classes can be used

```
/\w/       // Word character - Alphanumeric(any letter or number) or underscore
/\w+/      // + => one or more
/\W/       // Non-word character
/\d/       // Match any digit
/\d+/      // Match any digit 0 or more times
/\D/       // Match any non-digit
/\s/       // Match whitespace character
/\S/       // Match non whitespace character
/\b/       // word boundary


```

### Assertions

Similar to conditions<br>

```
/x(?=y)/    // Match x only if it is followed by y
/x(?!y)/            // Match x only if it is not followed by y


```


