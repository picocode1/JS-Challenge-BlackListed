# BlackListed - JS Challenge
I'm trying to create this function but this annoying blacklist keeps triggering.

```javascript
function blackListed(argument){
  if (typeof argument == 'string'){
    return Number(argument)
  }
  else
  {
    return String(argument)
  }  
}
```
And that didn't work, I got this response back: ```
ERROR: Your code contains blacklisted characters: ( ) ( ' ' ) ( ) ( )```

Can you try to find a way to create a function that will convert strings to numbers and numbers to strings?

I've checked all the characters and these are getting filtered, and also I think there is a limit of **100** characters.
```console
` ' " . ~ ( ) 0 1 2 3 4 5 6 7 8 9 /
```

## How do i try?
First install the required libraries to test your code.
```console
npm i mocha chai assert --save
```
After you've done that write your code in <tt>**solution.js**</tt> and run <tt>**npm test**</tt> to check if you completed the challenge.
> Don't use the keyword <tt>**let**</tt> because it can't be accessed.

---

Originally posted on [codewars](https://www.codewars.com/kata/62569babdb611500166186f5/) but got retired.
