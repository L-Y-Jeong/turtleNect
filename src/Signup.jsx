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
    password: false,
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

  const validatePassword = (password) => {
    const re = /(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
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
      // handle signup logic here
      alert('회원가입에 성공했습니다.');
      navigate('/login'); // 성공적으로 회원가입하면 로그인 화면으로 이동
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
              style={{ backgroundImage: 'url(img/id_icon.png)' }} /* 예시 이미지 경로 */
            />
            <input 
              type="password" 
              name="password" 
              placeholder="비밀번호" 
              value={form.password} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/pw_icon.png)' }} /* 예시 이미지 경로 */
            />
            {errors.password && <p className="error">*8~16자의 영문, 숫자, 특수문자를 사용해 주세요.</p>}
            <input 
              type="text" 
              name="phone" 
              placeholder="휴대폰 번호" 
              value={form.phone} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/phone_icon.png)' }} /* 예시 이미지 경로 */
            />
            <input 
              type="email" 
              name="email" 
              placeholder="이메일 주소" 
              value={form.email} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/email_icon.png)' }} /* 예시 이미지 경로 */
            />
            {errors.email && <p className="error">*유효한 이메일 주소가 아닙니다.</p>}
            <input 
              type="text" 
              name="nickname" 
              placeholder="닉네임" 
              value={form.nickname} 
              onChange={handleChange} 
              style={{ backgroundImage: 'url(img/nickname_icon.png)' }} /* 예시 이미지 경로 */
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
              style={{ backgroundImage: 'url(img/age_icon.png)' }} /* 예시 이미지 경로 */
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
