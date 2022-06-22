const Canhquat = document.querySelector(".canh")
const Mu = document.querySelector(".music")
const MuBtn = document.querySelector(".musicbtn")
function StopBtn (){
    Canhquat.style.animation = "none";
    MuBtn.play();
    Mu.pause();
}

function OneBtn (){
    Canhquat.style.animation = "xoayvong 0.5s linear infinite ";
    MuBtn.play();
    Mu.play();
}

function TwoBtn (){
    Canhquat.style.animation = "xoayvong 0.3s linear infinite ";
    MuBtn.play();
    Mu.play();
}

function ThreeBtn (){
    Canhquat.style.animation = "xoayvong 0.01s linear infinite ";
    MuBtn.play();
    Mu.play();
}