window.addEventListener('load', ()=>{
    notes = JSON.parse(localStorage.getItem('NotesStorage')) || [];
    
    const addNote = document.querySelector('#noteButton');
    notesUpdateAll()

    addNote.addEventListener('click', ()=>{
        notes = JSON.parse(localStorage.getItem('NotesStorage')) || [];
        const note = {
            noteText: document.getElementById('note').value,
            isDone: false
        }
        notes.push(note);

        localStorage.setItem('NotesStorage', JSON.stringify(notes));
        notesUpdateAll();
    })


})

function notesUpdateAll(){
        document.getElementById('notesList').innerHTML ='';
        notes.forEach(note => {
            const node = document.createElement("div");
            const content = document.createElement('div');
            const actionDiv = document.createElement('div');
            document.getElementById("notesList").appendChild(node);
            const edit = document.createElement('button');
		    const deleteButton = document.createElement('button');
            edit.innerHTML = 'Edit';
		    deleteButton.innerHTML = 'Delete';
            content.innerHTML= `<input type="text" value="${note.noteText}" readonly class='Notetext'> `;
            node.appendChild(content);
            node.appendChild(actionDiv);
            actionDiv.appendChild(edit);
            
		    actionDiv.appendChild(deleteButton);
            node.classList.add('contentDiv');
            content.classList.add('NoteTextDiv');
            actionDiv.classList.add('ButtonsDiv');
            deleteButton.classList.add('deletebtn');
            edit.classList.add('editbtn');

            deleteButton.addEventListener('click', e=>{
                notes = notes.filter(e => e != note);
                localStorage.setItem('NotesStorage', JSON.stringify(notes));
                notesUpdateAll()


            })

                
            
            
            
        })
       
    
    
}
