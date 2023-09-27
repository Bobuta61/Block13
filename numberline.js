// get the sum of two numbers
// show the result  based on the output


// answers begin here:

// const num1 = 50;
// const num2 = 51;

// const num1 = 99;
// const num2 = -2;

// const num1 = 0;
// const num2 = 101;

// const num1 = 500;
// const num2 = -500;

// const num1 = -1000;
// const num2 = 0;

const num1 = -5;
const num2 = 0;


// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

const sum = num1+num2;

// > < >= <=

if (sum > 100) {
    console.log(sum + " is greater than 100");
} else if (sum > 0) {
    console.log(sum + " is greater than 0");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum < 0 && sum > -1001) {
    console.log(sum + " is a negative number");
} else if (sum < -1000) {
    console.log(sum + " is less than -1000");
}
