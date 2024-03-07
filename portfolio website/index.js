let submit = document.getElementById('submit')
let bar = document.getElementById('bar')

function downloadBtn() {
    alert("cv downloaded")
    window.open('resume.html')
}

let ul = document.querySelector('ul')
// bar.addEventlistnner('click',function(){
    function barr(){
    ul.classList.toggle('showData')
    if(ul.classList == 'showData'){
        bar.className = 'bx bx-x'
    }else{
        bar.className = 'bx bx-menu'
    }
}

