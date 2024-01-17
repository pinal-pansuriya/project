const quizdata = [
    {
        question: "Q1:What is the full form of HTML?",
        a: "Hello Ti My Land",
        b: "HeyText Markup Language",
        c: "HyperText Makup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
     },
    {
        question:"Q2:What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Case Style Sheep",
        c: "Cascadings Style Sheeps",
        d: "Cascading Super Seet",
        ans: "ans1"
     },
    {
        question:"Q3:What is the full form of HTTP?",
        a: "HyperText Transfer Protocol ",
        b: "Hypertest Transfer protocol",
        c: "Hypertexts Test Prorocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
     },
    {
        question:"Q4:What is the full form of JS?",
        a: "Javascipt",
        b: "Javascript",
        c: "Jscript",
        d: "Jsonscript",
        ans: "ans2"
     },
    {
        question:"Q5:How many primitive data types in js?",
        a: "1",
        b: "3",
        c: "6",
        d: "4",
        ans: "ans3"
     },
    {
        question:"Q6:How many compond data types in js?",
        a: "2",
        b: "5",
        c: "7",
        d: "9",
        ans: "ans1"
     },
    {
        question:"Q7:Who had composed the original Ramayan?",
        a: "Rishi Valmiki",
        b: "Tulasi Das",
        c: "Sant Ek Nath",
        d: "Anhinanda",
        ans: "ans1"
     },
    {
        question:"Q8:What was the Lord Rama's father?",
        a: "Shalishuka",
        b: "Nahapana",
        c: "Rajadhiraj",
        d: "Dasarath",
        ans: "ans4"
     },
    {
        question:"Q9:Who has written Bhavartha Ramayan?",
        a: "Madhva kandali",
        b: "Eknath",
        c: "Krittibas",
        d: "Budda Reddy",
        ans: "ans2"
     },
    {
        question:"Q10:Which city did Lord rama rule as the king>",
        a: "Ayodhya",
        b: "Lanka",
        c: "Mithila",
        d: "Kishkindha",
        ans: "ans1"
     }
]

const question = document.querySelector(".question")
const option1=document.getElementById("option1")
const option2=document.getElementById("option2")
const option3=document.getElementById("option3")
const option4=document.getElementById("option4")
const submit= document.getElementById("submit")
const answers = document.querySelectorAll(".answer")
const showscore = document.getElementById("showscore")

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizdata[questionCount]

    question.innerText =  questionList.question
    option1.innerText =  questionList.a
    option2.innerText =  questionList.b
    option3.innerText =  questionList.c
    option4.innerText =  questionList.d

}
loadQuestion()

const CheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle) => {
       if(curAnsEle.checked){
        answer = curAnsEle.id
       }
    })
    return answer;
}

const deselect = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false)
}

submit.addEventListener('click', () => {
    const checkAnswer = CheckAnswer()
    console.log(checkAnswer)

    if(checkAnswer === quizdata[questionCount].ans){
        score++
    }

    questionCount++;

    deselect()

    if(questionCount < quizdata.length){
        loadQuestion()
    }else{
        showscore.innerHTML = `
        <h3>You scored ${score}/${quizdata.length}</h3>`

        showscore.classList.remove("scoreArea")
    }
})



