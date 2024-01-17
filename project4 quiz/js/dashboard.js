function dashBoard() {
    const nameHeading = document.getElementById('nameHeading')
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
    nameHeading.innerText = `Hello ${currentUser.name} 👋`
}

dashBoard()

function quiz(){
    window.location.replace("quiz.html")
}