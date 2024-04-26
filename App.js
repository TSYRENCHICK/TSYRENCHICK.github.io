import React, { useState } from 'react';
import YouTubeBackgroundVideo from './YouTubeBackgroundVideo';
import './App.css'; // ����������� ���� ������ ��� �������� ������

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);

    // ���� ���������� ������ �������� 10, �������� ���������
    if (clickCount === 9) {
      setShowMessage(true);
    }
  };

  // ����� ���������
  const messageText = "ALEXANDR NAIMUSHIN YOU ARE GAY!";

  return (
    <div className="App">
      {/* �����-��� � YouTube */}
      <div className="video-container">
        <YouTubeBackgroundVideo videoId="Ps-0f0K6izM" />
      </div>

      {/* �������� (������) */}
      <img 
        src="./heart.png" 
        alt="Heart" 
        className={`heart ${clickCount >= 10 ? 'exploded' : ''}`} // ��������� ����� ��� ���������� � ��������, � ����� ���������, ���������� �� ������
        onClick={handleClick} // ��������� ���������� ������� �����
      />

      {/* ������� */}
      {showMessage && (
        <div className="message">
          <h1>{messageText}</h1>
        </div>
      )}

      {/* ���� ��������� ���������� �������� */}
    </div>
  );
};

export default App;
