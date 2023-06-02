import React from 'react';

function Circles() {
  return (
    <section id="summary">
      <section id="summary">
        <br></br>
            <h2 id="mission">OUR FEATURES</h2>
            <p id="goal">A single stop shop for all things wellbeing. Search your favourite books, add notes, quotes and comments in our bespoke notes section. And don't forget to add a rating.
            <br/>Catch a sneak peak of our top picks below. </p>
    </section>
    <div className="circle-container">
      <div className="circle">
        <span role="img" aria-label="Memo">📝</span>
        <p className="circle-text">Notes</p>
      </div>
      <div className="circle">
        <span role="img" aria-label="Star">⭐️</span>
        <p className="circle-text">Rate</p>
      </div>
      <div className="circle">
        <span role="img" aria-label="Magnifying Glass">🔍</span>
        <p className="circle-text">Search</p>
      </div>
    </div>
    </section>
  );
}

export default Circles;