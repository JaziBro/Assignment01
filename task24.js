//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following://
//Tests for equality and inequality with strings//
//TRUE//
var num1 = "10";
var num2 = "15";
console.log("is num1 equal to num2? I predict True");
console.log(num1 != num2);
//FALSE//
var num3 = "10";
var num4 = "15";
console.log("is num3 not equal to num4? I predict False");
console.log(num3 == num4);
//Tests using the lower case function//
//TRUE//
var word = "coding";
console.log("is word in lowercase? I predict True");
console.log(word == "coding");
//FALSE//
var word2 = "coding";
console.log("is word2 in lowercase? I predict False");
console.log(word2 != "coding");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to//
//TRUE//
var num5 = 20;
var num6 = 21;
console.log("is num6 > num5? I predict True");
console.log(num5 != num6);
//FALSE//
var num7 = 20;
var num8 = 21;
console.log("is num7 > num8? I predict True");
console.log(num7 == num8);
//Tests using "and" and "or" operators//
//TRUE//
var num9 = 100;
var num10 = 150;
console.log("is num9 > 80 and is num10 < 200? I predict True");
console.log(num9 > 80 && num10 < 200);
//FALSE//
var num11 = 100;
var num12 = 150;
console.log("is num11 > 200 or is num12 < 100 I predict True");
console.log(num9 > 80 || num10 < 200);
//Test whether an item is in a array and Test whether an item is not in a array//
//TRUE//
var languages = ["Urdu", "English", "Spanish"];
console.log("is English in the array? I predict True");
console.log(languages.indexOf("English"));
//FALSE//
var languages2 = ["Urdu", "English", "Spanish"];
console.log("is English in the array? I predict True");
console.log(languages.indexOf("French"));
