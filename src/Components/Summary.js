import {useNavigate} from 'react-router-dom';
import '../App.css';


//brief summary of page goals for homepage
function Summary(){
    const history = useNavigate();

    //function to send user to about page when 'find out more' button is clicked
    //for now it sends to library as I don't have the about page yet
    const handleClick = () => {
      history('/About');
    };
    return(
        <section id="summary">
            <h2 id="mission">OUR MISSION</h2>
            <p id="goal"> Serenity focuses on tracking and storing books relating to personal growth, mental health, self-care and overall wellbeing. 
                It aims to provide users with the tools and resources to enhance their wellbeing whilst being an easy, accessible and friendly
                application to use. 
                <br/> Use the button below to find out about the team... and more!
                 </p>
            <button className="bttn" id="findout" type="submit" onClick={handleClick}>FIND OUT MORE</button>
        </section>
    );
}

export default Summary;