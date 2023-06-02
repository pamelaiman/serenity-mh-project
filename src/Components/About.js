import React from 'react';
import './About.css';
import NavBar from './TrackedNavBar';
import Footer from './Footer';

const AboutUs = (props) => {
  return (
    <section className='page' id="accountPage">
      <NavBar />
      <div className='content'>
        <div className='about-section'>
          <div className='team-members column'>
            <h2>Meet The Team</h2>
            <ul>
              <li>Aarushi Sharma</li>
              <li>Luz Angela Giraldo Echeverri</li>
              <li>Megan Button</li>
              <li>Megan Wilcox</li>
              <li>Pamela Iman</li>
            </ul>
          </div>
          <div className='mission column'>
            <h2>Our Mission</h2>
            <p>
              This is our wellbeing book tracker, specifically designed to allow you to focus on managing your reading habits.
            </p>
            <p>
              The site is focused on personal growth, mental health, self-care, and overall wellbeing.
            </p>
            <p>
              You will find a huge library of wellbeing and self-care books as well as professional counseling books.
            </p>
            <p>
              We have designed this app with wellbeing and peace in mind, so we have chosen a neutral color scheme as well as making it easy for you to navigate.
            </p>
            <p>
              You will also be able to create your own user area so that you are able to save books that you either have already read or would like to read, and from here you can also give these books a rating that only you can see.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;