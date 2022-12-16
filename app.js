
let form = document.querySelector('#form-ccontainer')
let toDoList = document.querySelector('#to-do-list')
let todoTitle = document.querySelector('#to-do-title')
let todoText = document.querySelector('#to-do-text')
let formButton = document.querySelector('#form-button')
let submitButton = document.querySelector('#submit-button')
let listPlaceholder = document.querySelector('.list-placeholder')
let notes = []


document.body.addEventListener('click', event => {
    handleForm(event)
})

form.addEventListener('submit', event =>{
    event.preventDefault()

    let title = todoTitle.value;
    let text = todoText.value;
     const hasNote = title || text;

     if (hasNote) {

         this.addNote({ title: title, text: text });
    }

    displayNote()

})

function openForm(event) {
    
        form.classList.add('form-open');
        todoTitle.style.display = "block";
        formButton.style.display = "block";

    


}

function closeForm(event) {
 
        form.classList.remove('form-open');
        todoTitle.style.display = "none";
        formButton.style.display = "none";
     
        todoTitle.value= ''
        todoText.value =""
}



function handleForm(event) {

    const isFormClicked = form.contains(event.target)

   let title = todoTitle.value;
   let text = todoText.value;
    const hasNote = title || text;
    console.log(hasNote)


    if (isFormClicked) {
        openForm(event)

    } else if (hasNote){
        addNote({title,  text})
    }
    
    else {
        closeForm(event)
    }


}

function addNote({title, text}){

    const newNote = {
       title,
       text,
       color: 'white',
       id : notes.length > 0 ? notes[notes.length - 1].id+ 1 : 1
    };
        console.log(newNote)

    notes = [...notes, newNote]
    closeForm()
}


function displayNote(){
let hasNote = notes.length > 0;
listPlaceholder.style.display = hasNote ? 'none' : 'flex'

toDoList.innerHTML = notes.map(note =>`
<div style = "background: ${note.color};" class = "note" data-id="${note.id}">
    <div class = "${note.title && 'note-title'}">${note.title}</div>
    <div class="note-text">${note.text}</div>
    <div class="toolbar-container">
      <div class="toolbar">
        <img class="toolbar-color" data-id=${note.id} src="https://icon.now.sh/palette">
        <img class="toolbar-delete" data-id=${note.id}  src="https://icon.now.sh/delete">
      </div>
    </div>
    </div>

`)
}





// function addList(){
//  todoTitle = todoTitle.value;
//  console.log(todoTitle)
//  todoText = todoText.value;
//     const hasNote = todoTitle || todoTitle;

// if(hasNote){
//     this.addNote()
// }
//     console.log(hasNote)

// }


// if(todoTitle && todoText){
//     addList()
// }
//     ()
