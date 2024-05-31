import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NotesDisplay from './components/NoteDisplay';
import ArchivedNotes from './components/ArchivedNotes';
import './style.css';
import './utility.css';

const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => setNotes([...notes, note]);
    const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));
    const togglePin = (id) => setNotes(notes.map(note => note.id === id ? { ...note, isPinned: !note.isPinned } : note));
    const toggleArchive = (id) => setNotes(notes.map(note => note.id === id ? { ...note, isArchived: !note.isArchived } : note));

    return (
        <Router>
            <Header />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <NoteForm addNote={addNote} />
                            <NotesDisplay 
                                notes={notes} 
                                togglePin={togglePin} 
                                deleteNote={deleteNote} 
                                toggleArchive={toggleArchive} 
                            />
                        </>
                    } 
                />
                <Route 
                    path="/archive" 
                    element={<ArchivedNotes notes={notes} deleteNote={deleteNote} toggleArchive={toggleArchive} />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
