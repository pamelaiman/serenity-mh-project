import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const StarHighlight = (selectedRating) => {
    setRating(selectedRating);
  };

  const ShowStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'selected' : ''}`}
          onClick={() => StarHighlight(i)}
          data-testid={`star-${i}`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating" data-testid="rating-container">
      {ShowStars()}
      Rating: {rating}
    </div>
  );
};

export default Rating;

