import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const books = [
    { id: 1, title: 'Hẻm núi bạc', img: '/images/book1.jpeg' },
    { id: 2, title: 'Thu vàng', img: '/images/book2.jpeg' },
    { id: 3, title: 'Mùa đông lạnh giá', img: '/images/book3.jpeg' },
    { id: 4, title: 'Thu về rồi nè em', img: '/images/book4.jpeg' },
    { id: 5, title: 'Ông già và biển cả', img: '/images/book4.jpg' },
    { id: 6, title: 'Tất cả là chuyện nhỏ', img: '/images/book6.jpg' },
    { id: 7, title: 'Lược sử Thể Giới', img: '/images/book7.jpg' },
    { id: 8, title: 'Việt Nam Phong tục', img: '/images/book8.jpg' },
    { id: 9, title: 'Đi tìm lối sống', img: '/images/book9.jpg' },
    { id: 10, title: 'Tắt đèn', img: '/images/tatden.png' },
    { id: 11, title: 'Thuyền trưởng cướp biển', img: '/images/book10.jpg' },
    { id: 12, title: 'Em là ai', img: '/images/book2.jpeg' },
    { id: 13, title: 'Mùa đông lạnh giá', img: '/images/book3.jpeg' },
    { id: 14, title: 'Tất cả là chuyện nhỏ', img: '/images/book4.jpeg' },
    { id: 15, title: 'Tắt Đèn', img: '/images/tatden.png' },
    { id: 16, title: 'Đắc Nhân Tâm', img: '/images/book6.jpg' },
    { id: 17, title: 'Lược Sử Thế giới', img: '/images/book7.jpg' },
    { id: 18, title: 'Việt Nam Phong Tục', img: '/images/book8.jpg' },
    { id: 19, title: 'Man search for meaning', img: '/images/book9.jpg' },
    { id: 20, title: 'Hải tặc', img: '/images/book10.jpg' },
    { id: 21, title: 'Tất cả là chuyện nhỏ', img: '/images/book1.jpeg' },
    { id: 22, title: 'Em là ai', img: '/images/book2.jpeg' },
    { id: 23, title: 'Mùa đông lạnh giá', img: '/images/book3.jpeg' },
    { id: 24, title: 'Tất cả là chuyện nhỏ', img: '/images/book4.jpeg' },
    { id: 25, title: 'Điểu Nhân', img: '/images/book11.jpg' },
    { id: 26, title: 'Đắc Nhân Tâm', img: '/images/book6.jpg' },
    { id: 27, title: 'Lược sử Thế Giới', img: '/images/book7.jpg' },
    { id: 28, title: 'Việt Nam Phong tục', img: '/images/book8.jpg' },
    { id: 29, title: 'Đi tìm lẽ sống', img: '/images/book9.jpg' },
    { id: 30, title: 'Cướp biển', img: '/images/book10.jpg' },
  ];

  return (
    <div className="homepage">
      <div className="main-content-layout">
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-item" key={book.id}>
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default HomePage;
