import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    password: '',
    phone: '',
    email: '',
    nickname: '',
    gender: 'none',
    age: '',
  });

  const [errors, setErrors] = useState({
    email: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(form.email);

    setErrors({
      email: !emailValid,
    });

    if (emailValid) {
      alert('회원가입에 성공했습니다.');
      navigate('/login');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup_header">
        <img src="img/turtleNect_logo.png" alt="TurtleNect Logo" className="logo" />
      </div>
      <div className="signup-container">
        <div className="signup_titleWrap">Signup</div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input 
              type="text" 
              name="id" 
              placeholder="아이디" 
              value={form.id} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/id_icon.png)' }}
            />
            <input 
              type="password" 
              name="password" 
              placeholder="비밀번호" 
              value={form.password} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/pw_icon.png)' }}
            />
            <input 
              type="text" 
              name="phone" 
              placeholder="휴대폰 번호" 
              value={form.phone} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/phone_icon.png)' }}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="이메일 주소" 
              value={form.email} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/email_icon.png)' }}
            />
            {errors.email && <p className="error">*유효한 이메일 주소가 아닙니다.</p>}
            <input 
              type="text" 
              name="nickname" 
              placeholder="닉네임" 
              value={form.nickname} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/nickname_icon.png)' }}
            />
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
            <input 
              type="number" 
              name="age" 
              placeholder="나이" 
              value={form.age} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/age_icon.png)' }}
            />
          </div>
          <button 
            type="submit" 
            className={form.id && form.password && form.phone && form.email && form.nickname ? 'active' : ''} 
            disabled={!(form.id && form.password && form.phone && form.email && form.nickname)}
          >회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
