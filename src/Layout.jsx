import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Layout.css';
import './Login';
import './App.css';
import './Myinfo';

function Layout() {
  const [activeMenu, setActiveMenu] = useState('home'); // 초기 활성 메뉴 설정
  const username = "내목에베레스트";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const handleMyinfo = () => {
    setActiveMenu('myinfo');
    navigate('/myinfo');
  };

  const handleHome = () => {
    setActiveMenu('home');
    navigate('/app/home');
  };

  const handleReportAnalysis = () => {
    setActiveMenu('ReportToday');
    navigate('/app/ReportToday');
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
            <li className={`sidebar-item ${activeMenu === 'home' ? 'active' : ''}`} onClick={handleHome}>
              <img src="/img/home_icon.png" alt="Home" className="icon" />
              <span className="sidebar-item-text"> 홈</span>
            </li>
            <li className={`sidebar-item ${activeMenu === 'hospitals' ? 'active' : ''}`}>
              <img src="/img/hospital_icon.png" alt="Hospitals" className="icon" />
              <span className="sidebar-item-text"> 주변 병원</span>
            </li>
            <li className={`sidebar-item ${activeMenu === 'ReportToday' ? 'active' : ''}`} onClick={handleReportAnalysis}>
              <img src="/img/report_icon.png" alt="Report" className="icon" />
              <span className="sidebar-item-text"> 리포트 분석</span>
            </li>
            <li className={`sidebar-item ${activeMenu === 'chatbot' ? 'active' : ''}`}>
              <img src="/img/chatbot_icon.png" alt="Chatbot" className="icon" />
              <span className="sidebar-item-text"> 챗봇</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Layout;
