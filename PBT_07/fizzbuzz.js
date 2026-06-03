// fizzbuzz.js

// =======================
// Version 1: Classic
// =======================

console.log("=== CLASSIC FIZZBUZZ ===");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " = FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " = Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " = Buzz");
    }
    else {
        console.log(i);
    }
}


// =======================
// Version 2: Custom
// =======================

function customFizzBuzz(n, rules) {

    console.log("\n=== CUSTOM FIZZBUZZ ===");

    for (let i = 1; i <= n; i++) {

        let result = "";

        // Duyệt qua từng rule
        for (let j = 0; j < rules.length; j++) {

            if (i % rules[j].divisor === 0) {
                result += rules[j].word;
            }
        }

        // Nếu không có word nào
        if (result === "") {
            console.log(i);
        }
        else {
            console.log(i + " = " + result);
        }
    }
}


// =======================
// Test
// =======================

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

/*
Ví dụ output:

3 = Fizz
5 = Buzz
7 = Jazz
15 = FizzBuzz
21 = FizzJazz
35 = BuzzJazz
*/