let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.textContent = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            input.textContent = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.textContent = string;
        }
        else{
            string += e.target.innerHTML;
            input.textContent = string;
        }

    })
})