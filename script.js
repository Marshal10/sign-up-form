const container=document.querySelector('.container')
const signBtn=document.querySelector('.green-bg button')

signBtn.addEventListener('click',()=>{
    container.classList.toggle('change')
})