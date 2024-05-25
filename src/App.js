import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Myinfo from './Myinfo';
import ReportToday from './ReportToday';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<Signup />} />
        {/* 기본 경로를 로그인 화면으로 리디렉션 */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* 보호된 라우트를 포함한 페이지 */}
        <Route path="/app/*" element={<Layout />}>
          <Route index element={<Navigate to="home" />} /> {/* 기본 경로를 홈으로 리디렉션 */}
          <Route path="home" element={<Home />} />
          <Route path="reportToday" element={<ReportToday />} />
        </Route>
        <Route path="myinfo" element={<Myinfo />} />
        {/* 모든 경로를 로그인 페이지로 리디렉션 */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
