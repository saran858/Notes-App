import React from 'react';
import Note from './Note';

const ArchivedNotes = ({ notes, deleteNote, toggleArchive }) => {
    const archivedNotes = notes.filter(note => note.isArchived);

    return (
        <div className="archive-notes">
            <div>Archived Notes</div>
            <div className="archive-notes-container d-flex wrap gap-md">
                {archivedNotes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                        toggleArchive={toggleArchive}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArchivedNotes;
