let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let paragraph = document.getElementById("death-paragraph")
let restart = document.getElementById("death")
let jumping = 0
let counter = 0

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 300) + 150)
    hole.style.top = random + "px"
    counter++
})

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))

    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px"
    }
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let cTop = -(504 - characterTop)


    if ((characterTop > 480) || ((blockleft < 30) && (blockleft > -30) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        restart.style.display = "block"
        character.style.display = "none"
        block.style.display = "none"
        hole.style.display = "none"
        paragraph.innerHTML = `Your Score : ${counter}`;
        return
       
    }
}, 10)

function jump() {
    jumping = 1
    let jumpCount = 0
    let jumpInterval = setInterval(function () {

        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if ((characterTop > 113) && (jumpCount < 15)) {

            character.style.top = (characterTop - 4.5) + "px"
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval); {
                jumping = 0;
                jumpCount = 0
            }
        }
        jumpCount++

    }, 10)
}

function gameRestart() {
    location.reload()
}