//Conditional statement

// if (condition) {
//     // execute some code here
// } else {
//     //execute some code here
// }

// If hour between 6 and 12 print "Good mornign"
// If hour between 12 and 18 print "Good afternoon"
// Otherwise: good Evening

var hour = 17

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evning')
}

var ageIsmoreThanEighteen = true
var isUSCitizen = false

if (ageIsmoreThanEighteen && isUSCitizen) {
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer is NOT eligible for DL')
}