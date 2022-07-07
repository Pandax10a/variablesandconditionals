let age = 1;
let is_subscribed = false;
let difference = 18 - age;

if ((age >= 18) && (is_subscribed === true)) {
    console.log("thank you for subscribing");
} else if ((age < 18) && (is_subscribed === true)) {
    console.log("thank you for subbing but come back in " + difference + " years");
} else if ((age >= 18) && (is_subscribed === false)) {
    console.log("smash that subscribe button!!!");
} else if ((age < 18) && (is_subscribed === false)) {
    console.log("come back in " + difference + " years and then subscribe");
} else {
    console.log("you have either or both undefined age or undeclared sub");
}