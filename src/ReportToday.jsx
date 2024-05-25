import React, { useState } from 'react';
import './ReportToday.css';
import ReportWeek from './ReportWeek';

function ReportToday() {
  const [activeTab, setActiveTab] = useState('today');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const warnings = [
    '13:05',
    '14:45',
    '14:54',
    '15:06',
    '15:23',
    '15:40',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15'
  ];

  const war_cnt = warnings.length;

  const weekData = {
    dates: ['5.24', '5.25', '5.26', '5.27', '5.28', '5.29', '5.30'],
    warnings: [11, 32, 8, 14, 3, 21, 12],
  };

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
                <span className="count">{war_cnt}</span>
                <span className="count-label">count</span>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-header">time line</div>
            <div className="timeline-line"></div>
            <div className="timeline-list">
              {warnings.map((time, index) => (
                <div key={index} className="timeline-item">
                  <span className="item-count">{index + 1}</span>
                  <span className="item-divider">|</span>
                  <span className="item-time">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`tab-content ${activeTab === 'week' ? 'active' : ''}`}>
        <ReportWeek data={weekData} />
      </div>
    </div>
  );
}

export default ReportToday;
