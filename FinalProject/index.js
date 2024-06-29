const form = document.getAnimations('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phonenumber= document.getElementById('pnumber');
const password= document.getElementById('password');
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages= []
    if (name.value === '' || name == null){
        messages.push('Name is required')

    }
    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
    }
}
)
