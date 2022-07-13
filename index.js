let homeScoreTxt = document.getElementById("homeScore")
let guestScoreTxt = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0

let home = document.getElementById("home")
let guest = document.getElementById("guest")

function add1ToHomeScore() {
    homeScore += 1
    homeScoreTxt.innerText = homeScore
}

function add2ToHomeScore() {
    homeScore += 2
    homeScoreTxt.innerText = homeScore
}

function add3ToHomeScore() {
    homeScore += 3
    homeScoreTxt.innerText = homeScore
}

function add1ToGuestScore() {
    guestScore += 1
    guestScoreTxt.innerText = guestScore
}

function add2ToGuestScore() {
    guestScore += 2
    guestScoreTxt.innerText = guestScore
}

function add3ToGuestScore() {
    guestScore += 3
    guestScoreTxt.innerText = guestScore
}