import React, { useState, useEffect } from 'react';
import './Myinfo.css';
import './Layout.css';

const Myinfo = () => {
  const [form, setForm] = useState({
    nickname: '',
    id: '',
    password: '',
    email: '',
    gender: 'none',
    age: '',
  });

  const [errors, setErrors] = useState({
    password: false,
    email: false,
  });

  useEffect(() => {
    // 사용자 정보를 로드하는 함수 (예시 데이터 사용)
    const loadUserInfo = () => {
      const userInfo = {
        nickname: '내목에베레스트',
        id: 'myneckishigh',
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
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(form.email);
    const passwordValid = validatePassword(form.password);
    setErrors({
      email: !emailValid,
      password: !passwordValid,
    });
    if (emailValid && passwordValid) {
      // 사용자 정보 업데이트 로직 (예시)
      alert('사용자 정보가 업데이트되었습니다.');
    }
  };

  return (
    <div className="myinfo-page">
      <div className="header">
        <div className="logo-container">
          <img src="/img/turtleNect_logo.png" alt="Logo" className="logo" />
        </div>
      </div>
      <h2>내 정보</h2>
      <form className="myinfo-form" onSubmit={handleSubmit}>
        <div className="input-container">
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
          {errors.password && <p className="error">*영문, 숫자, 특수문자를 모두 포함해야 합니다.</p>}
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
        </div>
        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default Myinfo;
