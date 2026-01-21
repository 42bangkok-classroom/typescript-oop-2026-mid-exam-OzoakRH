const input = process.argv[2]
const number = Number(input)

if (Number.isNaN(number) || input=== "") {  
}
else if (number <= 0){
}
else {
    if (number == number/3 || number == number / 5) {
        console.log("FizzBuzz")
    }
    else if (number == number / 3) {
        console.log("Fizz")
    }
    else if (number == number / 5) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}
