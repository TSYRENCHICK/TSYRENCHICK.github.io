import React, { useState } from 'react';
import YouTubeBackgroundVideo from './YouTubeBackgroundVideo';
import './App.css'; // Импортируем файл стилей для анимации сердца

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);

    // Если количество кликов достигло 10, показать сообщение
    if (clickCount === 9) {
      setShowMessage(true);
    }
  };

  // Текст сообщения
  const messageText = "ALEXANDR NAIMUSHIN YOU ARE GAY!";

  return (
    <div className="App">
      {/* Видео-фон с YouTube */}
      <div className="video-container">
        <YouTubeBackgroundVideo videoId="Ps-0f0K6izM" />
      </div>

      {/* Картинка (Сердце) */}
      <img 
        src="./heart.png" 
        alt="Heart" 
        className={`heart ${clickCount >= 10 ? 'exploded' : ''}`} // Добавляем класс для стилизации и анимации, а также проверяем, взорвалось ли сердце
        onClick={handleClick} // Добавляем обработчик события клика
      />

      {/* Надпись */}
      {showMessage && (
        <div className="message">
          <h1>{messageText}</h1>
        </div>
      )}

      {/* Ваше остальное содержимое страницы */}
    </div>
  );
};

export default App;
