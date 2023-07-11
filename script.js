console.log("Ajay Dhakal");

const tooglebutton = document.getElementsByClassName('toogle-button')
[0]
const navbarlinks = document.getElementsByClassName('navbarlinks')
[0]

tooglebutton.addEventListener('click', ()=>{
    navbarlinks.classList.toogle('active')
})