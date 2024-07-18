let age = document.getElementById("age-input").value

document.getElementById("age-button").onclick = function () {
    let age = document.getElementById("age-input").value

    if (age <= 0) {
        document.getElementById("myH1").textContent = "How the hell did you even enter the site ?"
    }
    else if (age > 0 && age < 18) {
        document.getElementById("myH1").textContent = "You are too young to enter the site ;("
    }
    else if (age == 1000) {
        document.getElementById("myH1").textContent = "Chandhu"
    }
    else if (age >= 100) {
        document.getElementById("myH1").textContent = "ANTIQUES are not allowed in the site ;("
    }
    else {
        document.getElementById("myH1").textContent = "Enjoy Your Session"
    }
}