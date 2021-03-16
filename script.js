const myModal=document.querySelector(".modal-wrapper");
const closeBtn=document.querySelector("#closeMe");
const closeBtn2=document.querySelector("#closeIt");
const modalLaunch=document.getElementById("launchModal")

modalLaunch.addEventListener("click",()=>myModal.style.display="block");
closeBtn.addEventListener("click",()=>myModal.style.display="none");
closeBtn2.addEventListener("click",()=>myModal.style.display="none");

// window.onclick =(event)=>{
//     console.log(event.target)
//     myModal.style.display = "none";
//     // if (event.target !== myModal) {
//     //   myModal.style.display = "none";
//     // }
//   }
