// for search function works
const search_user = document.getElementById('search')

search_user.addEventListener('change', function () {
    console.log(this.value)
    var searched = notes.filter((data, ind) =>
        data.title.value.toLowerCase().includes(this.value.toLowerCase())
    )
    console.log(searched)
})
console.log(this.value)

const addbutton = document.querySelector('#addbutton')
const main = document.querySelector('#main')

// Function to save notes to localStorage
function saveNotes() {
    const notes = [];
    document.querySelectorAll('.note').forEach(note => {
        const id = note.id;
        const title = note.querySelector('.untitled').value;
        const content = note.querySelector('#content').value;
        notes.push({ id, title, content });
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to add a new note
function notes_add(text = '', untitled_text = '', id = null) {
    if (!id) {
        id = Math.random().toString(36).substring(2, 15);
    }

    const note = document.createElement('div');
    note.classList.add("note");
    note.id = id;
    note.innerHTML = `
        <div class="tools">
            <textarea class="untitled" placeholder="Untitled">${untitled_text}</textarea>
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea id="content">${text}</textarea>
    `;
    main.appendChild(note);

    // Event listener for trash button
    note.querySelector('.trash').addEventListener('click', function () {
        note.remove();
        saveNotes();
    });

    // Event listener for save button
    note.querySelector('.save').addEventListener('click', function () {
        saveNotes();
    });
}

// Load notes from localStorage on page load
(function loadNotes() {
    const lsnotes = JSON.parse(localStorage.getItem("notes")) || [];
    lsnotes.forEach(note => {
        notes_add(note.content, note.title, note.id);
    });
})();

// Event listener for adding a new note
addbutton.addEventListener('click', function () {
    notes_add();
});
