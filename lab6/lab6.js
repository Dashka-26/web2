let a = 20;
let b = 10;
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a-b);

let firstName = "Іванов";
let secondName = "Іван";
let fullName = secondName + " " + firstName;
console.log("\nПривіт, " + fullName + "!\n");

let age = 17;
if (age >= 18) {
    console.log("Доступ дозволено\n");
} else {
    console.log("Доступ заборонено\n")
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

function square(number){
    return number *= number;
}
console.log('\n' + square(5) + '\n');

const fruits = ["apple", "banana", "peach"];
fruits.push("abricosa");
console.log(fruits);
