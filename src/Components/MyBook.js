import test2 from '../img/test2.jpg';
import {Link} from 'react-router-dom';


function MyBook({ title, pages, description }){
    return(
        <section className='currentRead'>
            <img alt="current read" src={test2} id='cover'/>
            <Link className="link" id="currentLink" to='/book1'>BOOK TITLE</Link>
            <section className='currentDescription'>
                <span className='currentDescriptiopn'>
                How Self-Love is the key to Unlocking your potential
                 {description}
                    <span
                    dangerouslySetInnerHTML={{
                        __html: ' ',
                    }}
                    />
                </span>
            </section>
        </section>

    );
}

export default MyBook;

// I was unable to do the add to list button so I have added the placeholders back - Pamela

// import test2 from '../img/test2.jpg';
// import {Link} from 'react-router-dom';


// function MyBook(){
//     return(
//         <section className='currentRead'>
//             <img alt="current read" src={test2} id='cover'/>
//             <Link className="link" id="currentLink" to='/book1'>BOOK TITLE</Link>
//             <section className='currentDescription'>
//                 <span className='currentDescription'>
//                  How Self-Love is the key to Unlocking your potential
//                     <span
//                     dangerouslySetInnerHTML={{
//                         __html: ' ',
//                     }}
//                     />
//                 </span>
//             </section>
//         </section>

//     );
// }

// export default MyBook;