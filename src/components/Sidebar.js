import React from 'react';
import '../styles/Sidebar.css'; 

const Sidebar = () => {
  const ads = [
    {
      title: 'Giày Thời Trang',
      description: 'Mẫu giày mới nhất, giảm giá 30% hôm nay!',
      image: '/images/giay.jpg',
    },
    {
      title: 'Iphone 16',
      description: 'Giá ưu đãi, nhanh tay nào các bạn ơi',
      image: '/images/dienthoai.jpg',
    },
    {
      title: 'Thẻ Cào Điện Thoại',
      description: 'Nạp ngay!',
      image: '/images/thecao.jpg',
    },
    {
      title: 'Thuốc',
      description: 'Sản phẩm chăm sóc sức khỏe giảm giá đặc biệt.',
      image: '/images/thuoc.jpg',
    },
    {
      title: 'Nước Uống',
      description: 'Giải khát mùa hè với ưu đãi lên đến 50%.',
      image: '/images/nuocuong.jpg',
    },
    {
      title: 'Sản Phẩm Đặc Biệt',
      description: 'Khám phá thêm các ưu đãi không thể bỏ lỡ!',
      image: '/images/khac.jpg',
    },
  ];

  return (
    <div className="sidebar">
      <h3>Có thể bạn quan tâm</h3>
      {ads.map((ad, index) => (
        <div className="ad-item" key={index}>
          <h3>{ad.title}</h3>
          <p>{ad.description}</p>
          <img src={ad.image} alt={ad.title} className="ad-image" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
