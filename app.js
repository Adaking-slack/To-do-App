
var form = document.querySelector('#form-ccontainer')
var todoTitle = document.querySelector('#to-do-title')
var todoText = document.querySelector('#to-do-text')
var formButton = document.querySelector('#form-button')
var come = 'do';


document.body.addEventListener('click', event =>{
    handleForm(event)
    console.log('hello')
})

function openForm(event){
  
    form.classList.add('form-open');
    window.todoTitle.style.display = "flex";
    window.formButton.style.display = "block";


}

function closeForm(event){
    console.log(come)

    form.classList.remove('form-open');
    window.todoTitle.style.display = "none";
    window.formButton.style.display = "none";
}



function handleForm(event){

    const isFormClicked = form.contains(event.target)
     
     if(isFormClicked){
         openForm(event)
    
    }else{
        closeForm(event)
    }
   
    
}



// function openForm(event){
//     const text = todoText;
//     const title = todoTitle;
//     const button = formButton

//     form.classList.add('form-open');
//     title.style.display = "block"
//     button.style.display = "block"
// }