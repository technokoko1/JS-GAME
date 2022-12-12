if(window.innerWidth < 500){
    let boardWidth = window.innerWidth-2;
    let gameWidth = window.innerWidth-102;
    document.documentElement.style.setProperty('--boardWidth', boardWidth + "px");
    document.documentElement.style.setProperty('--width', gameWidth + "px");
}else{
     boardWidth = 500;
    gameWidth = 400;
}
let counter = 2;
let btn = document.getElementById("btn");

function stopSliding(sliderMoving, sliderAbove, sliderB4){
    sliderMoving = document.getElementById(sliderMoving);
     sliderAbove = document.getElementById(sliderAbove);
     sliderB4 = document.getElementById(sliderB4);

    let left = window.getComputedStyle(sliderMoving).getPropertyValue("left");

    sliderMoving.classList.remove("animate");
    sliderMoving.style.left = left;

    let width = parseFloat(window.getComputedStyle(sliderMoving).getPropertyValue("width"));
    left = parseFloat(left);
    let leftB4 = parseFloat(window.getComputedStyle(sliderB4).getPropertyValue("left"));
    let difference = left - leftB4;
    let absDifference = Math.abs(difference);

    let restartDiv=document.getElementById('dead')
    let scoreP=document.getElementById('score')
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        let score = "Score: ".concat(counter-2);
        btn.setAttribute("onclick", "");
        
        scoreP.innerHTML=`Your Score is ${score} !`
        restartDiv.style.display="block"
        Location.reload();
       
    }
    if(difference>0){
        left = left + absDifference;
    }else{
        left = left - difference;
        sliderMoving.style.left = left.toString().concat("px");
    }

    let offset = (width - absDifference).toString().concat("px");
  
    sliderMoving.style.width = offset; 
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";

    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    let onclick = "stopSliding('slider".concat(counter, "','slider", counter+1, "','slider", counter-1, "')");
    btn.setAttribute("onclick",onclick);
    counter++;
}