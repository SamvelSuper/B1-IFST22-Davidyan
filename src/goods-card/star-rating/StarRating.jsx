import React, { useState, useEffect } from 'react';
import './StarRating.css';

export default function StarRating({ rating, onStarClick }) {
    const [selectedRating, setSelectedRating] = useState(rating);

    useEffect(() => {
        setSelectedRating(rating);
    }, [rating]);

    const handleClick = (clickedIndex) => {
        setSelectedRating(clickedIndex);
        onStarClick(clickedIndex);
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((index) => (
                <span
                    key={index}
                    className={index <= selectedRating ? 'star-filled' : 'star-empty'}
                    onClick={() => handleClick(index)}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
