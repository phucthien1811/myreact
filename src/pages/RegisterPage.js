import React from 'react';
import '../styles/RegisterPage.css'; 

const RegisterPage = () => {
    return (
        <div className="register-page">
            <h2 className="register-title">Đăng ký</h2>
            <form className="register-form">
                <input type="text" placeholder="Tên Đầy đủ" className="register-input" />
                <input type="text" placeholder="Tên tài khoản" className="register-input" />
                <input type="email" placeholder="Email" className="register-input" />
                <input type="password" placeholder="Mật khẩu" className="register-input" />
                <button type="submit" className="register-button">Tạo tài khoản</button>
            </form>
            <p className="login-link">
                Bạn đã có tài khoản<a href="/dang-nhap">Đăng nhập</a>
            </p>
        </div>
    );
};

export default RegisterPage;
