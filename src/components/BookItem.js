import React from 'react';
import '../styles/BookItem.css';

const BookItem = ({ title, image, description }) => {
  return (
    <div className="book-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BookItem;
