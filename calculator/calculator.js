const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {
      display.textContent = eval(text);
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});














































// class calculator{
//     constructor(previousOperand,currentOperand){
//         this.previousOperand=previousOperand;
//         this.currentOperand=currentOperand;
//         this.clear();
//     }

//     clear(){
//         this.currentOperand='';
//         this.previousOperand='';
//         this.operation=undefined;
//     }

//     delete(){

//     }

//     append(number){
//         if(number=='.' && this.currentOperand.includes(".")) return;
//          this.currentOperand=this.currentOperand.toString() + number.toString();
//     }

//     operationChoose(operation){

//     }

//     compute(){

//     }

//     displayUpdate(){
//   this.currentOperand.innerText=this.currentOperand;
//     }
// }


// const numberButtons=document.querySelectorAll("[data-number]");
// const operationButtons=document.querySelectorAll("[data-operation]");
// const equalsButtons=document.querySelector("[data-equals]");
// const deleteButtons=document.querySelector("[data-delete]");
// const allClearButtons=document.querySelector("[data-all-clear]");
// const previousOperand=document.querySelector("[data-previous-operand]");
// const currentOperand=document.querySelector("[data-current-operand]");


// const calculator= new calculator(previousOperand,currentOperand);

// numberButtons.forEach(button=>{
//     button.addEventListener("click",()=>{
//         calculator.append(button.innerText);
//         calculator.displayUpdate();
//     })
// })
