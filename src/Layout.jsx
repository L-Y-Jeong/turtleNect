import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import './Layout.css';
import './Login';
import './App.css';
import './Myinfo';

function Layout({ children }) {
  const username = "내목에베레스트";
  const navigate = useNavigate(); // useNavigate 사용

  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('userToken');
    // 로그인 페이지로 이동
    navigate('/login');
  };

  const handleMyinfo = () => {
    navigate('/myinfo');
  };
  

  return (
    <div className="container">
      <div className="header">
        <div className="header-right">
          <span className="nickname"><span className="username">{username}</span>님</span>
          <button className="header-text-button" onClick={handleMyinfo}>내 정보</button>
          <span className="divider">|</span>
          <button className="header-text-button" onClick={handleLogout}>로그아웃</button>
        </div>
      </div>
      <div className="logo-container">
        <img src="/img/turtleNect_logo.png" alt="Logo" className="logo" />
      </div>
      <div className="main-wrapper">
        <div className="sidebar">
          <ul>
            <li className="sidebar-item active"><img src="/img/home_icon.png" alt="Home" className="icon"/><span className="sidebar-item-text"> 홈</span></li>
            <li className="sidebar-item"><img src="/img/hospital_icon.png" alt="Hospitals" className="icon"/><span className="sidebar-item-text"> 주변 병원</span></li>
            <li className="sidebar-item"><img src="/img/report_icon.png" alt="Report" className="icon"/><span className="sidebar-item-text"> 리포트 분석</span></li>
            <li className="sidebar-item"><img src="/img/chatbot_icon.png" alt="Chatbot" className="icon"/><span className="sidebar-item-text"> 챗봇</span></li>
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Layout;
