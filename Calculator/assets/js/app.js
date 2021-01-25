// const addBtn = document.querySelector("#plus");
// const subBtn = document.querySelector("#minus");
// const divBtn = document.querySelector("#divide");
// const mulBtn = document.querySelector("#multiply");
const numContainer = document.querySelector("#number")
const opContainer = document.querySelector("#button")
const input = document.querySelector("#text-area")
const clearContainer = document.querySelector("#clear")
const Equates = document.querySelector("#equals")

// // add
// addBtn.addEventListener('click', add);

// // subtract
// subBtn.addEventListener('click', clearAllTasks);

// //   divide
// divBtn.addEventListener('click', filterTasks);

// // multiply
// mulBtn.addEventListener('click', removeTask);
opContainer.addEventListener('click', operator)
clearContainer.addEventListener('click', clear)
Equates.addEventListener('click', equal);
numContainer.addEventListener('click', num);

function num(e){
   var numb = e.target.innerText;
   input.innerText += numb;
}



function operator(e){
    var op = e.target.innerText;
    input.innerText += op;
}

function clear(e){
    input.innerText = ""
}

function equal(){
    var inputString = input.innerText;
    clear();
    var result = (evaluate(inputString));
    if (result == "Infinity"){
        input.innerText = "numbers aren't divisible by zero"
    }else{input.innerText = result;}
    
}

function evaluate(inputString){
     return eval(inputString)
    
}

   

