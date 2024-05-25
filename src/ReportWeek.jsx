import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './ReportWeek.css';

const ReportWeek = ({ data }) => {
  const maxWarnings = Math.max(...data.warnings);
  const minWarnings = Math.min(...data.warnings);
  const avgWarnings = (data.warnings.reduce((sum, value) => sum + value, 0) / data.warnings.length).toFixed(2);

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: '경고 횟수',
        data: data.warnings,
        borderColor: '#FF7612',
        borderWidth: 2,
        pointBackgroundColor: '#FF7612',
        pointBorderColor: '#FF7612',
        pointBorderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 1,
                fill: true, // 선 아래 색 채우기 활성화
        backgroundColor: 'rgba(255, 165, 89, 0.2)', // 채워질 색상
        tension: 0, // 부드러운 곡선
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: { color: '#404040' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#404040' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
      },
    },
    maintainAspectRatio: false, // 그래프의 크기 조정을 위해 이 속성을 추가합니다
  };

  return (
    <div className="report-week">
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
      <div className="statistics-container">
        <div className="statistic-box">
          <div className="statistic-label">최대 경고 횟수</div>
          <div className="statistic-value">{maxWarnings}</div>
        </div>
        <div className="statistic-box">
          <div className="statistic-label">평균 경고 횟수</div>
          <div className="statistic-value">{avgWarnings}</div>
        </div>
        <div className="statistic-box">
          <div className="statistic-label">최소 경고 횟수</div>
          <div className="statistic-value">{minWarnings}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportWeek;
