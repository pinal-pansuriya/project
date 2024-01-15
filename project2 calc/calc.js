let input = document.getElementById("inputBox")
let buttons = document.querySelectorAll("button")
let root = document.getElementById("square")
let string = ""

// let arr = Array.from(buttons)
// console.log(arr)

//foreach

buttons.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        } 
        else if(e.target.innerHTML == "sqrt"){
            string = Math.sqrt(string)
          
            input.value=string
        }  
        else if(e.target.innerHTML == "AC"){
            string=""
            input.value=string
        }
        else if(e.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1)
            input.value=string
        }else{
        string += e.target.innerHTML
        input.value = string
        }
     })
})