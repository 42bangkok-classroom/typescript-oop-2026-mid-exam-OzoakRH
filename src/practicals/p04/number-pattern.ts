const input = process.argv[2]
const numberInput = Number(input)

if (Number.isNaN(numberInput)) {
} 
else if (numberInput <= 0) {
} 
else {
    for (let i = 0; i < numberInput; i++) {
        let all = "";
        const leftSpace = numberInput - (i + 1);
        all += " ".repeat(leftSpace);
        for (let j = i + 1; j >= 1; j--) {
            all += j;
        }
        console.log(all);
    }
}
