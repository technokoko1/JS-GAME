let char = document.getElementById("character")
let block = document.getElementById("block")
let restart=document.getElementById("death")
let paragraph=document.getElementById("death-paragraph")
const audio = new Audio()
const crashAudio = new Audio()
crashAudio.src="/sound/mixkit-boxer-getting-hit-2055.wav"
audio.src="/sound/jump_11.wav"
function jump() {

    if (char.classList != "animate") {
        char.classList.add("animate")
        setTimeout(function () {
            char.classList.remove("animate")
        }, 500)
    }
  audio.play()
}

let seconds=0
function incrementSeconds(){

 seconds++
}

let timer = setInterval(incrementSeconds, 1000);

let checkDead = setInterval(function () {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

   

    if (blockLeft < 20 && blockLeft>0 && charTop>=130) {
        crashAudio.play()
        block.style.display="none"
        restart.style.display="block"
        paragraph.innerHTML=`You managed to survive for ${seconds} seconds!`
          
    }
}, 10)

function gameRestart(){
    location. reload()
}