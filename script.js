const container=document.querySelector('.container')
const signBtn=document.querySelector('.green-bg button')
const rightBtn=document.querySelector('.signup-form button')

signBtn.addEventListener('click',()=>{
    container.classList.toggle('change')
})

rightBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    alert("This form is not functional 🙂")
})