import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Myinfo.css';

const Myinfo = () => {
  const [form, setForm] = useState({
    nickname: '',
    id: '',
    password: '',
    phone: '',
    email: '',
    gender: 'none',
    age: '',
  });

  const [errors, setErrors] = useState({
    email: false,
  });

  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUserInfo = () => {
      const userInfo = {
        nickname: '내목에베레스트',
        id: 'myneckishigh',
        password: 'encryptedpassword',
        phone: '01012341234',
        email: 'myneckishigh@gmail.com',
        gender: 'none',
        age: '23',
      };
      setForm(userInfo);
    };
    
    loadUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (name === 'password') {
      setIsPasswordChanged(true);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(form.email);

    setErrors({
      email: !emailValid,
    });

    if (emailValid) {
      alert('저장이 완료되었습니다.');
    }
  };

  return (
    <div className="myinfo-page">
      <div className="top-bar"></div>
      <div className="logo-container">
        <img src="/img/turtleNect_logo.png" alt="Logo" className="logo" />
      </div>
      <div className="line"></div>
      <div className="myinfo-content">
        <h2>내 정보</h2>
        <div className="underline"></div>
        <form className="myinfo-form" onSubmit={handleSubmit}>
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
          />
          <label>아이디</label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            disabled
          />
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <label>휴대폰 번호</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">*유효한 이메일 주소가 아닙니다.</p>}
          <label>성별</label>
          <div className="gender-container">
            <button
              type="button"
              className={form.gender === 'female' ? 'selected' : ''}
              onClick={() => setForm({ ...form, gender: 'female' })}
            >여자</button>
            <button
              type="button"
              className={form.gender === 'male' ? 'selected' : ''}
              onClick={() => setForm({ ...form, gender: 'male' })}
            >남자</button>
            <button
              type="button"
              className={form.gender === 'none' ? 'selected' : ''}
              onClick={() => setForm({ ...form, gender: 'none' })}
            >해당 없음</button>
          </div>
          <label>나이</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          <div className="button-container">
            <button type="submit" className="save-button">저장</button>
            <button type="button" className="home-button" onClick={() => navigate('/app/home')}>홈으로</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Myinfo;
