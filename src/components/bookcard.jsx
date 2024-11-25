import React from 'react';



const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
   
    <div className="book-container">

    <div className="book-card ">
      <img src={coverUrl} alt={book.title} />
      <div className="book-details">
      <p><strong>{book.title}</strong></p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
      <p>Author: {book.author_name?.join(', ') || 'Unknown'}</p>
      <p>Description: {book.title_suggest || 'Unknown'}</p>
      <p>count of pages :{book.edition_count || 'Unknow'}</p>
      </div>
    </div>
</div>
   
 
  );
};

export default BookCard;
