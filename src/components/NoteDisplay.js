import React from 'react';
import Note from './Note';

const NotesDisplay = ({ notes, togglePin, deleteNote, toggleArchive }) => {
    const pinnedNotes = notes.filter(note => note.isPinned && !note.isArchived);
    const otherNotes = notes.filter(note => !note.isPinned && !note.isArchived);

    return (
        <div className="notes-display">
            {pinnedNotes.length > 0 && <div className="pin-title">Pinned</div>}
            <div className="pinned-notes-container d-flex wrap gap-md">
                {pinnedNotes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        togglePin={togglePin}
                        deleteNote={deleteNote}
                        toggleArchive={toggleArchive}
                    />
                ))}
            </div>
            {otherNotes.length > 0 && <div className="other-title">Others</div>}
            <div className="notes-container d-flex wrap gap-md">
                {otherNotes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        togglePin={togglePin}
                        deleteNote={deleteNote}
                        toggleArchive={toggleArchive}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotesDisplay;
