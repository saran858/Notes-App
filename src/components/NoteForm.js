import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleAddNote = () => {
        if (note.trim() || title.trim()) {
            addNote({
                id: Date.now(),
                title: title.trim(),
                note: note.trim(),
                isPinned: false,
                isArchived: false
            });
            setTitle('');
            setNote('');
        }
    };

    return (
        <div className="container d-flex direction-column align-center relative">
            <textarea
                className="text-area title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="text-area note"
                placeholder="Make a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button className="button add-btn d-flex align-center justify-center absolute" onClick={handleAddNote}>
                <span className="material-icons-outlined">add</span>
            </button>
        </div>
    );
};

export default NoteForm;
