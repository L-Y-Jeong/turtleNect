import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const User = {
  id: '1111',
  pw: '1111'
};

export default function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    setNotAllow(id === '' || pw === ''); // ID와 비밀번호가 비어있을 때만 로그인 버튼 비활성화
  }, [id, pw]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === User.id && pw === User.pw) {
      alert('로그인에 성공했습니다.');
      navigate('/app/home');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="page">
      <div className="login_titleWrap">login</div>
      <form className="loginContainer" onSubmit={handleSubmit}>
        <div className="contentWrap">
          <div className="inputTitle">ID</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="testtest123"
              value={id}
              onChange={handleId}
            />
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            Password
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pw}
              onChange={handlePw}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={notAllow}
            className="bottomButton"
          >
            로그인
          </button>
        </div>
      </form>
      <div className="signupLink" onClick={handleSignUp}>
        회원가입
      </div>
      <div className="logoContainer">
        <img
          src="img/turtleNect_logo.png"
          alt="TurtleNect Logo"
          className="loginLogo"
        />
      </div>
    </div>
  );
}
