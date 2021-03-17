const myModal=document.querySelector(".modal-wrapper");
const closeBtn=document.querySelector("#closeMe");
const closeBtn2=document.querySelector("#closeIt");
const modalLaunch=document.getElementById("launchModal")

// window.onclick =(event)=>{
//     if (event.target !== myModal) {
//       myModal.style.display = "none";
//     }
//   }

modalLaunch.addEventListener("click",()=>myModal.style.display="block");
closeBtn.addEventListener("click",()=>myModal.style.display="none");
closeBtn2.addEventListener("click",()=>myModal.style.display="none");

function myFunction() {
    const copyText = document.getElementById("cssUrl");
    const popUpElement=document.getElementById("myPopUp");
    navigator.clipboard.writeText("https://popcube-ui.netlify.app/main.css");
    popUpElement.classList.toggle("showPopUp")

  }
 

