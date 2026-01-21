export{}

const Input:number =  Number(process.argv[2]);
if (Number.isNaN(Input)|| Input <=0){
  process.exit();
}

for (let i = 1; i <= Input; i++){
  let result = '';
		for(let j = 0; j< i; j++){
      result += Input 
    }
    console.log(result)
}