import Note from './ItemView'
import './Notes.scss'

const NotesView = ({ notes }) => {
    return (
        <div id="notes">
            <div className="notes-wrapper">
                <div className="notes-list">
                    {notes && notes.map(note => (
                        <Note key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NotesView