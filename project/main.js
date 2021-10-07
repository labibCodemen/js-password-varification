document.addEventListener('input',function (){
    let inputId =  document.getElementById('inputId');
    let text = document.getElementById('text')
    let text2 = document.getElementById('text-war')
    if(inputId.value.length == 4){
        text.classList.remove('hidden')
        text.innerHTML = "Your Password is normal"        
        text.style.color = 'gray'

    }else if(inputId.value.length < 4){
        text.classList.remove('hidden')
        text.style.color = 'red'
        text.innerHTML = "Minimum Requerd 4 Creactor"
       
    }
    else if(inputId.value.length == 6){
        text.classList.remove('hidden')
        text.innerHTML = "Your Password is medium"
        text.style.color = 'yellow'
    }
    else if(inputId.value.length >= 8){
        text.classList.remove('hidden')
        text.innerHTML = "Your Password is strong"
        text.style.color = 'green'
    }
   

 })


