"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosemodal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");


function openModal(){
    console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i = 0;i < btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener("click",openModal);
}

btnClosemodal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);


document.addEventListener("keydown",function(e){
    console.log(e.key);


    if(e.key === "Escape"){
        if(!modal.classList.contains("hidden")){
            closeModal();
        }
    }
})