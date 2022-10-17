import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { useNoteLayerValue } from '../../hooks/NoteContext';
import Notes from '../Notes/NotesView'
import './TakeNote.scss'

export default function TakeNote() {
    const [{ notes }, dispatch] = useNoteLayerValue()

    const [title, setTitle] = useState()
    const [text, setText] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!title && title.length < 1) return
        
        const newnote = {
            id: Math.floor(Math.random() * 52623631),
            title,
            text,
            isCompleted: false
        }

        dispatch({
            type: 'ADD_note',
            payload: newnote
        })

        setTitle('')
        setText('')
    }

    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <div id="take-note">
                { active
                    ? <div className="take-note-create-wrapper">
                        <div className="take-note-overlay" onClick={toggleActive} />
                        <form className="take-note-create active" onSubmit={handleSubmit}>
                            <input className="take-note-title" placeholder="Title" onChange={(event) => setTitle(event.target.value)} value={title} />
                            <TextareaAutosize className="take-note-text" placeholder="Take note..." onChange={(event) => setText(event.target.value)} value={text} />
                            <div className="take-note-bottom">
                                <button type="submit" className="take-note-button-create">Create</button>
                            </div>
                        </form>
                    </div>
                    : <div className="take-note-create-wrapper">
                        <form className="take-note-create" onClick={toggleActive}>
                            <span className="take-note-text">Take note...</span>
                        </form>
                    </div>
                }
            </div>
            <Notes notes={notes} />
        </>
        
    )
}