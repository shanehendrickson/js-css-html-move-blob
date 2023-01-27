const blob = document.querySelector(".blob");
const eyes = document.querySelector(".eye-container");
const greenGel = document.querySelector(".green-gel");
const greenPos = greenGel.getBoundingClientRect().x;
const pinkGel = document.querySelector(".pink-gel");
const pinkPos = pinkGel.getBoundingClientRect().x;

let blobLeft = 100;
let blobSpeed = 100;

function moveRight(){
  blobLeft += blobSpeed;
  blob.style.left = blobLeft + "px";

  if(blobLeft > pinkPos - 200){
    blob.style.backgroundColor = "rgb(240, 90, 210)";
  }
}

function moveLeft(){
  blobLeft -= blobSpeed;
  blob.style.left = blobLeft + "px";

  if(blobLeft < greenPos + 50){
    blob.style.backgroundColor = "rgb(67, 227, 64)";
  }
}

function moveBlob(e){
  if(e.key === "ArrowLeft"){
    //move left
    moveLeft();
    eyes.style.transform = "rotate(180deg)";
    eyes.style.left = "-75px";

  }
  if(e.key === "ArrowRight"){
    //move right
    moveRight();
    eyes.style.transform = "rotate(0deg)";
    eyes.style.left = "75px";
    
  }
  





  
  
}

document.addEventListener('keydown', moveBlob);