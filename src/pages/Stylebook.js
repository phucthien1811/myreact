import React from 'react';
import '../styles/Stylebook.css';

const Stylebook = () => {
  const books = [
    {
      id: 1,
      title: 'Giông Tố - tiểu thuyết nổi tiếng của nhà văn Vũ Trọng Phụng',
      description:
        'Với Giông Tố, Vũ Trọng Phụng đã tạo nên một tác phẩm đặc sắc vừa có giá trị văn học...',
      img: '/images/giongto.jpg',
      date: '16/10/2024',
      views: 281,
    },
    {
        id: 2,
        title: 'Vẻ đẹp của Thúy Kiều - Tác giả Huỳnh Gia Bảo',
        description:
          'Đây là tác phẩm truyện thơ nôm lục bát viết dựa trên cốt truyện "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân...',
        img: '/images/thuykieu.jpg',
        date: '19/09/2017',
        views: 35109,
      },
      {
        id: 3,
        title: 'Tây Du Kí - tiểu thuyết nổi tiếng của Ngô Thừa Ân',
        description:
          'Một chú khỉ sinh ra từ một tảng đá khổng lồ đã xuất hiện từ thời bàn cổ khai thiên lập địa. Khỉ đá nhanh chóng làm vua Hoa Quả Sơn, trở thành “Mĩ Hầu Vương”. Khỉ đá khao khát được học phép tiên để tu thành bất tử, nó tìm tới Bồ Đề Tổ Sư để học nghệ, được đặt cho cái tên: Tôn Ngộ Không. Sau khi học xong 72 phép thần thông biến hoá, những tưởng Tôn Ngộ Không sẽ sớm tu chí thành tiên..',
        img: '/images/tayduki.jpg',
        date: '27/1/2003',
        views: 2093904,
      },
      {
        id: 4,
        title: 'Tắt Đèn - Tác phẩm nổi tiếng của nhà văn Ngô Tất Tố',
        description:
          ' Cuốn sách “Tắt đèn” lấy bối cảnh những năm Việt Nam bị thực dân Pháp xâm lược, chúng đặt ra những chính sách vô lý. Gia đình chị Dậu, một gia đình thuộc hạng "nghèo nhất trong xã hội” phải tìm mọi cách để nộp tiền sưu:...',
        img: '/images/tatden.png',
        date: '26/11/2022',
        views: 67392,
      },
      {
        id: 5,
        title: 'Tấm Cám - Cổ tích Việt Nam',
        description:
          'Tấm Cám là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia đình, đặc biệt là mối quan hệ mẹ kế - con chồng; cuộc đấu tranh giữa và cái thiện thắng cái ác của người Việt....',
        img: '/images/tamcam.jpg',
        date: '18/11/2006',
        views: 11111111,
      },
 
  ];

  return (
    <div className="stylebook-page">
      <div className="main-content-stylebook">
        <div className="left-content">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.img} alt={book.title} className="book-img" />
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-meta">
                  Ngày đăng: {book.date} - Lượt xem: {book.views}
                </p>
                <p className="book-description">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-sidebar">
          <img
            src="/images/logo.jpg"
            alt="Banner"
            className="sidebar-image"
          />
          <div className="review-section">
            <h3 className="review-title">REVIEW XEM NHIỀU</h3>
            <ul className="review-list">
              <li>Tổng hợp những câu nói hay nhất về tình yêu</li>
              <li>Những câu nói hay về nghị lực sống</li>
             
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylebook;
