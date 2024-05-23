import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 리액트 라우터로부터 useNavigate 훅을 임포트합니다.
import './Login.css'; // 로그인 페이지 스타일 시트를 임포트합니다.


// 사용자 정보를 저장한 객체입니다.
const User = {
  id: 'uj1234',
  pw: 'zxcv1234@'
};

export default function Login() {
  const navigate = useNavigate(); // 페이지 이동을 위해 useNavigate 훅을 사용합니다.

  const [id, setId] = useState(''); // 사용자 입력 ID를 저장할 상태입니다.
  const [pw, setPw] = useState(''); // 사용자 입력 비밀번호를 저장할 상태입니다.
  const [pwValid, setPwValid] = useState(false); // 비밀번호 유효성 검사 결과를 저장할 상태입니다.
  const [notAllow, setNotAllow] = useState(true); // 로그인 버튼 활성화 상태를 저장할 상태입니다.

  // 비밀번호 유효성 상태가 변경될 때 로그인 버튼 활성화 상태를 업데이트합니다.
  useEffect(() => {
    setNotAllow(!pwValid);
  }, [pwValid]);

  // ID 입력 필드의 이벤트 핸들러입니다.
  const handleId = (e) => {
    setId(e.target.value);
  };

  // 비밀번호 입력 필드의 이벤트 핸들러입니다.
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; // 비밀번호 유효성 검사 정규식입니다.
    setPwValid(regex.test(e.target.value)); // 정규식 검사를 통해 비밀번호 유효성 검사 결과를 업데이트합니다.
  };

  // 로그인 버튼 클릭 시 호출되는 이벤트 핸들러입니다.
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 이벤트를 방지합니다.
    if (id === User.id && pw === User.pw) { // 입력된 ID와 비밀번호가 저장된 정보와 일치하는지 검사합니다.
      alert('로그인에 성공했습니다.');
      navigate('/home'); // 로그인 성공 시 홈 페이지로 이동합니다.
    } else {
      alert('등록되지 않은 회원입니다.'); // 일치하지 않을 경우 경고 메시지를 표시합니다.
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // 회원가입 페이지로 이동하는 함수, 이 경로는 예시로 설정함
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
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
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
