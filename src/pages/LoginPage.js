import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-title">Xin chào</h2>
      <form className="login-form">
        <input type="text" placeholder="Tên tài khoản" className="login-input" />
        <input type="password" placeholder="Mật khẩu" className="login-input" />
        <button type="submit" className="login-button">Đăng nhập</button>
      </form>
      <p className="register-link">
        Chưa có tài khoản <a href="/dang-ky">Tạo ngay</a>
      </p>
    </div>
  );
};

export default LoginPage;
