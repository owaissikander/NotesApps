

const addbutton = document.querySelector('#addbutton')
const main = document.querySelector('#main')
// const userSearch=document.getElementById('search')
// ye pura kaam baat han jo phey nhi karna 


// userSearch.addEventListener('change', function(){
//     var findOut=
// })

//const saveNotes = () =>
function saveNotes() {
    const notes = document.querySelectorAll('.note-textarea');
    const untitled = document.querySelectorAll('#untitled')
    const data = [];
    const untitled_data = []
    untitled.forEach((untitled) => {
        untitled_data.push(untitled.value)
    })
    console.log(untitled_data)
    localStorage.setItem('untitled', JSON.stringify(untitled_data))

    
    notes.forEach(
        (note) => {
            data.push(note.value)
        })
    console.log(data)
    localStorage.setItem('notes', JSON.stringify(data))
}

addbutton.addEventListener('click', function () {
    notes_add()
})


//const notes_add = () => 
function notes_add(text = '', untitled_text = '') {
    const note = document.createElement('div');
    note.classList.add("note",'untitled')
    note.innerHTML = `
     <div class="note">
            
          <div class="note">
            
            <div class="tools">
           <textarea id="untitled" class="untitled"  placeholder="untitled">${untitled_text}</textarea>
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea id="content">${text}</textarea>
        </div>
    `
    main.appendChild(note);


    note.querySelector('.trash').addEventListener(
        'click',
        function () {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector('.save').addEventListener('click', function () {
        saveNotes()
    })
    main.appendChild(note);
}


(
    function () {
        const lsnote = JSON.parse(localStorage.getItem("notes"))
        //console.log(lsnote)
        lsnote.forEach((lsnote) => {
            notes_add(lsnote)
            saveNotes()
        })
    }


)()