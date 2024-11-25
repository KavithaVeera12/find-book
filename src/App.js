import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchbar';
import BookCard from './components/bookcard';
import './App.css';


const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewText,setViewText] = useState('');
  const fetchBooks = async (query) => {
    setViewText(query);

    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app    ">
      <SearchBar onSearch={fetchBooks} />
      {!viewText && (
      <div className='text'>To view the books list, please use the search feature</div>
      )}
      <div className="book-list">
        {loading ? (
          <p className='  w-75 mt-5 m-auto p-3'>Loading...</p>
        ) : (
          books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
