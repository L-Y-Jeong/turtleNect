import React, { useState } from 'react';
import './ReportToday.css';
import ReportWeek from './ReportWeek';

function ReportToday() {
  const [activeTab, setActiveTab] = useState('today');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const warnings = [
    '1 | 13:05',
    '2 | 14:45',
    '3 | 14:54',
    '4 | 15:06',
    '5 | 15:23',
    '6 | 15:40',
    '7 | 16:00',
    '8 | 16:15',
    '9 | 16:30',
    '10 | 16:45',
    '11 | 17:00',
    '12 | 17:15'
  ];

  return (
    <div className="report-analysis">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'today' ? 'active' : ''}`}
          onClick={() => handleTabClick('today')}
        >
          오늘의 리포트
        </button>
        <button
          className={`tab-button ${activeTab === 'week' ? 'active' : ''}`}
          onClick={() => handleTabClick('week')}
        >
          주간 리포트
        </button>
      </div>
      <div className={`tab-content ${activeTab === 'today' ? 'active' : ''}`}>
        <div className="report-container">
          <div className="circle-container">
            <div className="circle">
              <div className="inner-circle">
                <span className="count">12</span>
                <span className="count-label">count</span>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-header">time line</div>
            <div className="timeline-line"></div>
            <div className="timeline-list">
              {warnings.map((warning, index) => {
                const [count, time] = warning.split(' | ');
                return (
                  <div key={index} className="timeline-item">
                    <span className="item-count">{count}</span>
                    <span className="item-divider">|</span>
                    <span className="item-time">{time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`tab-content ${activeTab === 'week' ? 'active' : ''}`}>
        <ReportWeek />
      </div>
    </div>
  );
}

export default ReportToday;
