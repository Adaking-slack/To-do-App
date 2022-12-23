let notes = []

let form = document.querySelector('#form-ccontainer')
let toDoList = document.querySelector('#to-do-list')
let todoTitle = document.querySelector('#to-do-title')
let todoText = document.querySelector('#to-do-text')
let formButton = document.querySelector('#form-button')
let submitButton = document.querySelector('#submit-button')
let listPlaceholder = document.querySelector('.list-placeholder')
let colorTooltip = document.querySelector('#color-tooltip');
let modal = document.querySelector('.modal')


document.body.addEventListener('click', event => {
    handleForm(event)
    deleteList(event)
})

document.body.addEventListener('click', event =>{
    openModal(event)
})

document.body.addEventListener('mouseover', event => {
    openToolTip(event);
    console.log(openToolTip(event))

})

document.body.addEventListener('mouseout', event => {
    closeTooltip(event);
});


colorTooltip.addEventListener('mouseover', function () {
    colorTooltip.style.display = 'flex';

})

colorTooltip.addEventListener('mouseout', function () {
    colorTooltip.style.display = "none"
})



colorTooltip.addEventListener('click', event => {
    const color = event.target.dataset.color;
    if (color) {
        editNoteColor(color)
    }
});

form.addEventListener('submit', event => {
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
    todoTitle.value = ''
    todoText.value = ""
}



function handleForm(event) {

    const isFormClicked = form.contains(event.target)

    let title = todoTitle.value;
    let text = todoText.value;
    const hasNote = title || text;
    console.log(hasNote)


    if (isFormClicked) {
        openForm(event)

    } else if (hasNote) {
        addNote({ title, text })
    }

    else {
        closeForm(event)
    }


}
function openModal(event) {
    if (event.target.closest('.note')) {
        modal.classList.toggle('open-modal');
    }
}

function deleteList(event) {
    event.stopPropagation();
    if (!event.target.matches('.toolbar-delete')) return;
    const id = event.target.dataset.id;
    notes = notes.filter(note => note.id !== Number(id));
    displayNote()
}

function editNoteColor(color) {
    notes = notes.map(note =>
        note.id === Number(this.id) ? { ...note, color } : note
    );
    console.log(notes)
    displayNote();
}

function addNote({ title, text }) {

    const newNote = {
        title,
        text,
        color: 'white',
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1
    };
    console.log(newNote)

    notes = [...notes, newNote]
    closeForm()
}


function openToolTip(event) {
    if (!event.target.matches('.toolbar-color')) return;
    id = event.target.dataset.id;
    const noteCoords = event.target.getBoundingClientRect();
    const horizontal = noteCoords.left + window.scrollX - 125;
    const vertical = noteCoords.top + window.scrollY - 9;
    colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
    colorTooltip.style.display = 'flex';
}


function closeTooltip(event) {
    if (!event.target.matches('.toolbar-color')) return;
    colorTooltip.style.display = 'none';
}




function displayNote() {
    let hasNote = notes.length > 0;
    listPlaceholder.style.display = hasNote ? 'none' : 'flex'

    toDoList.innerHTML = notes.map(note => `
<div style = "background: ${note.color};" class = "note" data-id="${note.id}">
    <div class = "${note.title && 'note-title'}">${note.title}</div>
    <div class="note-text">${note.text}</div>
    <div class="toolbar-container">
      <div class="toolbar">
        <img class="toolbar-color" data-id=${note.id} src="images/palette-solid.svg">
        <img class="toolbar-delete" data-id=${note.id}  src="images/trash-solid.svg">
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
