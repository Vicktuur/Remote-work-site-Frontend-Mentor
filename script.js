// Selecting the Elements
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector(".navigation")
const body = document.querySelector(".body")
const close = document.querySelector("#close")
const arrow = document.querySelectorAll(".features")

toggleOpen = () => {
    //toggling the drop down menu
    navigation.classList.toggle("active")

    //setting delay on background color change
    setTimeout(() => {
        body.classList.add("active")
    }, 500);
}

toggleClose = () => {
    //closes the navigation bar
    navigation.classList.remove("active")
    
    setTimeout(() => {
        body.classList.remove("active")
    }, 500)
}

// deactivation of drop down menu
closeNav = () => {
    arrow.forEach((lst) => {
        close.addEventListener("click", () => {
            lst.classList.remove("active")
        })
    })
}

// activation of navigation bar
hamburger.addEventListener("click", toggleOpen)

// deactivation of navigation bar on clicking the X symbol
close.addEventListener("click", toggleClose)

//deactivates drop down menu when closing navigation bar
close.addEventListener("click", closeNav)

// deactivation navigation bar when dark background is clicked
body.addEventListener("click", toggleClose)

// activation of drop down menu
arrow.forEach((lst) => {
    lst.addEventListener("click", () => {
        lst.classList.toggle("active")
    })
})