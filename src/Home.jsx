import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './Home.css';

const videoConstraints = {
  width: 900,
  height: 450,
  facingMode: 'user',
};

function Home() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        try {
          const response = await axios.post('http://localhost:5000/analyze', {
            image: imageSrc,
          });
          const results = response.data;
          if (results.length > 0) {
            const label = results[0].label;
            if (label === 'Turtle Neck') {
              alert('자세를 바로하세요');
            } else if (label === 'Normal') {
              alert('좋은 자세군요!');
            }
          }
        } catch (error) {
          console.error('Error sending image to server:', error);
        }
      }
    }
  }, [webcamRef]);

  const handleStart = () => {
    setIsCameraOn(true);
    intervalRef.current = setInterval(capture, 10000); // 10초마다 캡처
  };

  const handleStop = () => {
    setIsCameraOn(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="camera-screen">
      <div className="button-container">
        {!isCameraOn ? (
          <button className="control-button" onClick={handleStart}>
            촬영 시작
          </button>
        ) : (
          <button className="control-button" onClick={handleStop}>
            촬영 중지
          </button>
        )}
      </div>
      <div className="camera-view">
        {isCameraOn && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
