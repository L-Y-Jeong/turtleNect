import React from 'react';
import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Myinfo from './Myinfo';

function App() {
  return (
      <div className="App">
        <Routes>
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />
          {/* 홈 페이지 */}
          <Route path="/home" element={<Home />} />
          {/* 회원가입 페이지*/}
          <Route path="/signup" element={<Signup />} />
          {/* 내 정보 페이지 */}
          <Route path="/myinfo" element={<Myinfo />} />
           {/* 모든 경로를 로그인 페이지로 리디렉션 */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
  );
}

export default App;
