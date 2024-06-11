

const addbutton = document.querySelector('#addbutton')
const main = document.querySelector('#main')

//const saveNotes = () =>
function saveNotes() {
    const notes = document.querySelectorAll('.note textarea');

    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        })
    //console.log(data)
    localStorage.setItem('notes', JSON.stringify(data))
}

addbutton.addEventListener('click', function () {
    notes_add()
})


//const notes_add = () => 
function notes_add() {
    const note = document.createElement('div');
    note.classList.add("note")
    note.innerHTML = `
     <div class="note">
            
          <div class="note">
            
            <div class="tools">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea></textarea>
        </div>
    `
    main.appendChild(note);


    note.querySelector('.trash').addEventListener(
        'click',
        function () {
            note.remove()
        }
    )
    note.querySelector('.save').addEventListener('click', function () {
        saveNotes()
    })
    main.appendChild(note);
}