import React from "react";
import "../styles/Library.css";

const Library = () => {
  const recentBooks = [
    {
      id: 1,
      title: "Tất cả là chuyện nhỏ",
      author: "Richard Carlson",
      image: "/images/book1.jpeg",
      lastRead: "Hôm qua",
    },
    {
      id: 2,
      title: "Em là ai",
      author: "Nguyễn Nhật Ánh",
      image: "/images/book2.jpeg",
      lastRead: "3 ngày trước",
    },
    {
      id: 3,
      title: "Mùa đông lạnh giá",
      author: "John Green",
      image: "/images/book3.jpeg",
      lastRead: "1 tuần trước",
    },
    {
      id: 1,
      title: "Tất cả là chuyện nhỏ",
      author: "Richard Carlson",
      image: "/images/book1.jpeg",
      lastRead: "Hôm qua",
    },
    {
      id: 2,
      title: "Em là ai",
      author: "Nguyễn Nhật Ánh",
      image: "/images/book2.jpeg",
      lastRead: "3 ngày trước",
    },
    {
      id: 3,
      title: "Mùa đông lạnh giá",
      author: "John Green",
      image: "/images/book3.jpeg",
      lastRead: "1 tuần trước",
    },
  ];

  return (
    <div className="library-page">
      
      <h4 className="library-title">Đọc Gần Đây</h4>
      <div className="recent-books">
        {recentBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-last-read">Đọc lần cuối: {book.lastRead}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
