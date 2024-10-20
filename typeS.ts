const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const buttonEle= document.querySelector('button')!;

let numarr: Array<number> = [];
let strarr: string[] = [];

type numOrStr = number | string;
type resultObj = {
    val: number;
    timestamp: Date
}

function add(a: numOrStr,b: numOrStr){

    if(typeof a == 'number' && typeof b == 'number') return a + b;
    else if(typeof a =='string' && typeof b == 'string') return a + b;
    else return +a + +b;
    
}

function objectReturn(objectResult : resultObj){
    console.log(objectResult.val)
    console.log(objectResult.timestamp)
}

buttonEle.addEventListener('click',()=>{
    let val1 = num1.value;
    let val2 = num2.value;
    let added = add(+val1,+val2);
    let stradded = add(val1 , val2);

    console.log(added);
    console.log(stradded);
    objectReturn({val : added as number,timestamp: new Date()});
    numarr.push(added as number);
    strarr.push(stradded as string);
}) 

const newProm = new Promise<string>((res,rej)=>{

    setTimeout(()=>{
        res('promise resolved')
    },1000)
   
})

newProm.then(res => console.log(res))

