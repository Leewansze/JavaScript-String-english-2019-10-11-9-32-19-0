// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr = sententce.split(" ");
for(var i = 0; i < arr.length; i++){
  arr[i] = a[i][0].toUpperCase() + arr[i].subString(1,arr[i].length);
}
var string = arr.join(" ");
console.log(string);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1,2));
