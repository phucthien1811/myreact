import React from 'react';
import BookItem from './BookItem';
import '../styles/BookList.css';

const BookList = () => {
  const books = [
    { title: 'Tất cả là chuyện nho', image: '/images/Kyvi.jpeg', description: 'Tất cả đều là chuyện nhỏ...' },
    { title: 'em là ai', image: '/images/larung.jpeg', description: 'Một cuốn sách truyền cảm hứng cho giới trẻ...' },
    { title: 'Mùa đông lạnh quá', image: '/images/muadong.jpeg', description: 'Một cuốn sách về mùa đông...' },
    { title: 'Mùa đông ', image: '/images/muathu.jpeg', description: 'Một cuốn sách về mùa đông...' },
    { title: 'Tất cả là chuyện nho', image: '/images/Kyvi.jpeg', description: 'Tất cả đều là chuyện nhỏ...' },
    { title: 'em là ai', image: '/images/larung.jpeg', description: 'Một cuốn sách truyền cảm hứng cho giới trẻ...' },
    { title: 'Mùa đông lạnh quá', image: '/images/muadong.jpeg', description: 'Một cuốn sách về mùa đông...' },
    { title: 'Mùa đông ', image: '/images/muathu.jpeg', description: 'Một cuốn sách về mùa đông...' },
    { title: 'Tất cả là chuyện nho', image: '/images/Kyvi.jpeg', description: 'Tất cả đều là chuyện nhỏ...' },
    { title: 'em là ai', image: '/images/larung.jpeg', description: 'Một cuốn sách truyền cảm hứng cho giới trẻ...' },
    { title: 'Mùa đông lạnh quá', image: '/images/muadong.jpeg', description: 'Một cuốn sách về mùa đông...' },
    { title: 'Mùa đông ', image: '/images/muathu.jpeg', description: 'Một cuốn sách về mùa đông...' },
  { title: 'Nhà và cuộc sống', image: '/images/nha.jpeg', description: 'Cuốn sách nói về cuộc sống và gia đình...' }
    

  ];

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem key={index} title={book.title} image={book.image} description={book.description} />
      ))}
    </div>
  );
};

export default BookList;
