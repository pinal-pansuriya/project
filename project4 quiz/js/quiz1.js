const showScore = document.getElementById('showscore')
let score=0;

function questions(){
    if (document.getElementById('correct1').checked) {
                score++
            }
            if (document.getElementById('correct2').checked) {
                score++
            }
            if (document.getElementById('correct3').checked) {
                score++
            }
            if (document.getElementById('correct4').checked) {
                score++
            }
            if (document.getElementById('correct5').checked) {
                score++
            }
            if (document.getElementById('correct6').checked) {
                score++
            }
            if (document.getElementById('correct7').checked) {
                score++
            }
            if (document.getElementById('correct8').checked) {
                score++
            }
            if (document.getElementById('correct9').checked) {
                score++
            }
            if (document.getElementById('correct10').checked) {
                score++
            }
}

function result(){
    questions()
    showScore.innerHTML = `<h3> score ${score}</h3>`

}





































// let score = 0
// function question() {

//     if (document.getElementById('correct1').checked) {
//         score++
//     }
//     if (document.getElementById('correct2').checked) {
//         score++
//     }
//     if (document.getElementById('correct3').checked) {
//         score++
//     }
//     if (document.getElementById('correct4').checked) {
//         score++
//     }
//     if (document.getElementById('correct5').checked) {
//         score++
//     }
//     if (document.getElementById('correct6').checked) {
//         score++
//     }
//     if (document.getElementById('correct7').checked) {
//         score++
//     }
//     if (document.getElementById('correct8').checked) {
//         score++
//     }
//     if (document.getElementById('correct9').checked) {
//         score++
//     }
//     if (document.getElementById('correct10').checked) {
//         score++
//     }

// }
// question()
// const showscore = document.getElementById('showscore')
// function result() {
//     showscore.innerText = `score ${score}`
//     alert(`<h3>You scored ${score}</h3>`)
// }

