import React from 'react';

const Note = ({ note, togglePin, deleteNote, toggleArchive }) => {
    return (
        <div className="single-note relative shadow">
            <div className="d-flex align-center title-container">
                <span className="single-note-title">{note.title}</span>
                <button className="button del-btn v-hidden" onClick={() => deleteNote(note.id)}>
                    <span className="material-icons-outlined">delete</span>
                </button>
            </div>
            <p>{note.note}</p>
            <div className="options d-flex gap-md">
                <button className="button btn pinned-btn v-hidden" onClick={() => togglePin(note.id)}>
                    <span className={note.isPinned ? "material-icons" : "material-icons-outlined"}>push_pin</span>
                </button>
                <button className="button btn pinned-btn v-hidden" onClick={() => toggleArchive(note.id)}>
                    <span className="material-icons-outlined">archive</span>
                </button>
            </div>
        </div>
    );
};

export default Note;
