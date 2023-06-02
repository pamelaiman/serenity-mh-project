import TrackedNavBar from "./TrackedNavBar";
import Footer from "./Footer";
import Rating from "./Rating";
import test1 from '../img/test1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
import {useState} from 'react';



function TrackedBook(){

    //setting state of notes array and current note variable
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [showTextArea, setShowTextArea] = useState(true);


    //function to get value from user input text area
    const handleChange = (event) => {
        //set current note to user input value
        setCurrentNote(event.target.value);
    };


    //function to save the new note into notes array
    const handleSave = () => {
        setNotes([...notes,currentNote]);
        setCurrentNote('');
        setShowTextArea(false);
    };


    //function to allow user to edit an existing note and then update the notes array accordingly
    const handleEdit = (index) => {
        const editedNote = prompt('edit the note: ', notes[index]);
        if(editedNote !== null) {
            const updatedNotes = [...notes];
            updatedNotes[index] = editedNote;
            setNotes(updatedNotes);
        }
    };

    //function to delete selected note from notes array
    const handleDelete = (index) => {
        const updatedNotes= [...notes];
        updatedNotes.splice(index,1);
        setNotes(updatedNotes);
        setShowTextArea(true);
    };


    return(
        <section className="page">
            {/* nav bar */}
            <TrackedNavBar/>
            <h2>MY NOTES</h2>
            <p id="notesSummary">This is a space for you to keep track of your current reads. Feel free to use the notes section to write either: a quick summary of the pages you've just read, a favourite quote, a certain page number that you'd like to revist and much more!</p>

            {/* section that allows a two column layout */}
            <section className="row">
                {/* left column includes book cover */}
                <section className="column2" id="left">
                    <img id="cover2" src={test1} alt="tracked book cover"/>
                </section>

                {/* right column is the notes section */}
                <section className="column2" id="myNotes">
                    {showTextArea && (
                        <section>
                        <textarea value={currentNote} onChange={handleChange} placeholder="Write a note..." className="notesInput"/>
                        <button className="bttnNotes" type="submit" onClick={handleSave}>SAVE</button>
                        </section>
                    )}
                      <Rating />

                   {/* here is where the notes array is displayed with each note having an edit and delete button */}
                   {notes.map((note, index)=>(
                    <section key={index}>
                        <textarea className="notesInput" value= {note} readOnly/>
                        <button onClick={() => handleEdit(index)} className="bttnNotes"><FontAwesomeIcon icon={faEdit}/></button>
                        <button onClick={() => handleDelete(index)} className="bttnNotes"><FontAwesomeIcon icon={faTrash}/></button>
                    </section>
    
                   ))}
                </section>
            </section>
            <Footer/>
        </section>

    );
}

export default TrackedBook;