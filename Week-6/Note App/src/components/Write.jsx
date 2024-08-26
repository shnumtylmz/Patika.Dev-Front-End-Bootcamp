import { useState } from 'react';
import '../css/write.css';

function Write() {
    const [userMessage, setUserMessage] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function handleMessageChange(e) {
        setUserMessage(e.target.value);
    }

    function handleColorChange(color) {
        setSelectedColor(color);
    }

    function showNotes() {
        if (userMessage.trim() !== '' && selectedColor) {
            setNotes([...notes, { text: userMessage, color: selectedColor }]);
            setUserMessage('');
            setSelectedColor('');
        }
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Eşleşen aramayı ilk olarak göster.

    const sortedNotes = filteredNotes.sort((a, b) => {
        const aIncludesSearchTerm = a.text.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length === 3;
        const bIncludesSearchTerm = b.text.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length === 3;

        if (aIncludesSearchTerm && !bIncludesSearchTerm) {
            return -1;
        }
        if (!aIncludesSearchTerm && bIncludesSearchTerm) {
            return 1;
        }
        return 0;
    });

    return (
        <>
            <div className='main-div'>
                <h2>NotesApp</h2>
            <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className='entering-notes'>
                    <textarea
                        name="note"
                        id="note"
                        placeholder="Enter your note here..."
                        cols="70"
                        rows="10"
                        onChange={handleMessageChange}
                        value={userMessage}
                    ></textarea>
                    <button type="submit" onClick={showNotes}>Add</button>
                    <div className="colors">
                        <div className={`pink ${selectedColor === 'pink' ? 'selected' : ''}`} onClick={() => handleColorChange('pink')}></div>
                        <div className={`purple ${selectedColor === 'purple' ? 'selected' : ''}`} onClick={() => handleColorChange('purple')}></div>
                        <div className={`yellow ${selectedColor === 'yellow' ? 'selected' : ''}`} onClick={() => handleColorChange('yellow')}></div>
                        <div className={`blue ${selectedColor === 'blue' ? 'selected' : ''}`} onClick={() => handleColorChange('blue')}></div>
                        <div className={`green ${selectedColor === 'green' ? 'selected' : ''}`} onClick={() => handleColorChange('green')}></div>
                        </div>
                </div>
            </div>
            <div className="notes">
                {sortedNotes.map((note, index) => (
                    <div key={index} style={{ backgroundColor: note.color, padding: '10px', marginTop: '5px' }}>
                        {note.text}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Write;
