import React from 'react';
import '../styles/BookListPage.css'; 

const BookListPage = () => {
  const stories = [
    {
      id: 1,
      title: 'Giông Tố - tiểu thuyết nổi tiếng của nhà văn Vũ Trọng Phụng',
      description:
        'Với Giông Tố, Vũ Trọng Phụng đã tạo nên một tác phẩm đặc sắc vừa có giá trị văn học...',
      img: '/images/giongto.jpg',
      rank: 1,
    },
    {
      id: 2,
      title: 'Vẻ đẹp của Thúy Kiều - Tác giả Huỳnh Gia Bảo',
      description:
        'Đây là tác phẩm truyện thơ nôm lục bát viết dựa trên cốt truyện "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân...',
      img: '/images/thuykieu.jpg',
      rank: 2,
    },
    {
      id: 3,
      title: 'Tây Du Kí - tiểu thuyết nổi tiếng của Ngô Thừa Ân',
      description:
        'Một chú khỉ sinh ra từ một tảng đá khổng lồ đã xuất hiện từ thời bàn cổ khai thiên lập địa...',
      img: '/images/tayduki.jpg',
      rank: 3,
    },
    {
      id: 4,
      title: 'Tắt Đèn - Tác phẩm nổi tiếng của nhà văn Ngô Tất Tố',
      description:
        'Cuốn sách “Tắt đèn” lấy bối cảnh những năm Việt Nam bị thực dân Pháp xâm lược...',
      img: '/images/tatden.png',
      rank: 4,
    },
    {
      id: 5,
      title: 'Tấm Cám - Cổ tích Việt Nam',
      description:
        'Tấm Cám là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì...',
      img: '/images/tamcam.jpg',
      rank: 5,
    },
  ];

  return (
    <div className="storylist-page">
      <div className="storylist-main-content">
        <div className="storylist-content">
          {stories.map((story) => (
            <div className="storylist-item" key={story.id}>
              <img src={story.img} alt={story.title} className="storylist-img" />
              <div className="storylist-details">
                <h3 className="storylist-title">{story.title}</h3>
                <p className="storylist-rank">Xếp loại: {story.rank}</p>
                <p className="storylist-description">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="storylist-sidebar">
          <div className="sidebar-content">
            <h3>Danh mục nổi bật</h3>
            <ul>
              <li>Câu chuyện về nghị lực sống</li>
              <li>Những tác phẩm văn học bất hủ</li>
              <li>Cổ tích Việt Nam hay nhất</li>
              <li>Tiểu thuyết lãng mạn nổi tiếng</li>
              <li>Văn học hiện đại đáng đọc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
