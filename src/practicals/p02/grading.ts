const reciveinput = process.argv[2];
const pointScore = Number(reciveinput);

if (Number.isNaN(pointScore) || reciveinput === "") {
    console.log("Invalid input")
}
else if (pointScore < 0 || pointScore > 100){
    console.log("Invalid input")
}
else {
    if (pointScore >= 80){
        console.log("Grade is A")
    }
    else if (pointScore >= 70){
        console.log("Grade is B")
    }
    else if (pointScore >= 60){
        console.log("Grade is C")
    }
    else if (pointScore >= 50){
        console.log("Grade is D")
    }
    else{
        console.log("Grade is F")
    }
}