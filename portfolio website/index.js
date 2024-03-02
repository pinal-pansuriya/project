let submit = document.getElementById('submit')

function downloadBtn() {
    alert("cv downloaded")
    window.open('resume.html')
}

submit.addEventListener('click', function () {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let msg = document.getElementById('msg')

    if (name.value == "" || email.value == "" || msg.value == "") {
        alert("Please Fill Detail")
    } else {
        alert("Thanks For Conecting")
    }
})