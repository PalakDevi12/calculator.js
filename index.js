
let input =document.getElementById("box")

let OpArray=["+","-","/","*","()","%"]

function setVal(num){
    input.value +=num;
}
function setOp(Op){  
 let lastChar=input.value.slice(-1)
  console.log(lastChar)
//  if(lastChar =="*"|| lastChar =="/"||lastChar =="+"||lastChar=="-"){
//   return;  
//  }
if(lastChar ==""){
    return;
}
if(OpArray.includes(lastChar)&& OpArray.includes(Op)){
    input.value=input.value.slice(0,-1)
}
        input.value+=Op;
}
function output(){
    let ans =eval(input.value)
    input.value=ans

}
function clr(){
    
    input.value ="";
}
function del(){
    input.value = input.value.slice(0,-1)
}
