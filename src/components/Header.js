import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
      <img
            src="/images/logo.jpg"
            alt="Banner"
            className="logo-image"
          />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">TRANG CHỦ</Link></li>
          <li><Link to="/sach-hay-nen-doc">SÁCH HAY NÊN ĐỌC</Link></li>
          <li><Link to="/thu-vien-sach">THƯ VIỆN SÁCH</Link></li>
          <li><Link to="/sach-theo-chu-de">KINH ĐIỂN</Link></li>
          <li><Link to="/dang-ky">ĐĂNG KÝ</Link></li>
          <li><Link to="/dang-nhap">ĐĂNG NHẬP</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

