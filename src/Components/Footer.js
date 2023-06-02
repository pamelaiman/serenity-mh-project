import logo from '../img/serenity.png';


//created a footer
function Footer(){
    return(
        <section className='footer'>
            <section className='innerFooter'>
                <img alt="logo" src={logo} id='logo'/>
                <h3 id="footerTitle">SERENITY</h3>
                <p>© Serenity, 2023. All rights reserved.</p>
            </section>
        </section>


    );
}

export default Footer;