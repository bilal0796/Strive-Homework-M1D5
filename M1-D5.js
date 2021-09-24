/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
var AreaOfRectangle
const area = function(l1,l2) {
    AreaOfRectangle = l1 * l2 
}
area(2,4)
console.log(AreaOfRectangle)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
const crazySum = function (integer1,integer2) {
    if (integer1===integer2){
        return (integer1+integer2)*3
    }
    else{
        return (integer1+integer2)
    }
}
console.log("The sum of two different input integers is:",crazySum(1,2))
console.log("The sum of two same input integers will be the sum two integers multiplied by 3 which will sum to:",crazySum(1,1))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
const crazyDiff=function(givenNumber){
    if (givenNumber>19){
        return Math.abs(givenNumber-19)*3
    }
    else{
        return Math.abs(givenNumber-19)
    }
}
console.log("The absolute difference between given number and 19 is multiplied by 3 since, given number is greater than 19 resultinh:",crazyDiff(20))
console.log("The absoulute difference between given number and 19 is:", crazyDiff(14))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
const boundary=function(n){
    if ((n>=20 && n<=100)||n===400){
        return true
    }
        else{
        return false
    }
}
console.log(boundary(39),"As the input is within gthe range of 20 and 200")
console.log(boundary(400),"As the input number is equal 400")
console.log(boundary(10),"As the input number is neither equals 400 nor within the range of 20 and 200")

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
