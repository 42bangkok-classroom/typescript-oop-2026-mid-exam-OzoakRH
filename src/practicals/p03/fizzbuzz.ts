export{}

const input = process.argv[2]
const numberInput = Number(input)

for (let i = 1; i <= numberInput; i++) {
    if(Number.isNaN(numberInput) || input === ""){
    }
    else if (numberInput <= 0 ){
    }
    else{
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

   
   
    


  