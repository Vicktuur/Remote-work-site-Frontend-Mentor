// Selecting the Elements
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector(".navigation")
const body = document.querySelector(".body")
const close = document.querySelector("#close")
const arrow = document.querySelectorAll(".features")

// activation of navigation bar
hamburger.addEventListener("click", () => {
    navigation.classList.toggle("active")

    //setting delay on background color change
    setTimeout(() => {
        body.classList.add("active")
    }, 500);
})

// deactivation of navigation bar
close.addEventListener("click", () => {
    navigation.classList.remove("active")
    setTimeout(() => {
        body.classList.remove("active")
    }, 500)

    //deactivates drop down menu when closing
    arrow.forEach((lst) => {
        close.addEventListener("click", () => {
            lst.classList.remove("active")
        })
    })
})

// removal of navigation menu when dark background is clicked
body.addEventListener("click", () => {
    navigation.classList.remove("active")
    setTimeout(() => {
        body.classList.remove("active")
    }, 500) 
})

//drop down menu activation
arrow.forEach((lst) => {
    lst.addEventListener("click", () => {
        lst.classList.toggle("active")
    })
})