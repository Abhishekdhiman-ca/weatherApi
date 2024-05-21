import React, { useEffect, useState } from 'react';
import WeatherApp from './components/WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(
          'https://source.unsplash.com/1600x900/?weather'
        );
        setBackgroundImage(response.url);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-black text-center'>Weather App</h1>
      </header>
      <main>
        <WeatherApp backgroundImage={backgroundImage} />
      </main>
      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-repeat: no-repeat;
            height: 100%;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}

export default App;
