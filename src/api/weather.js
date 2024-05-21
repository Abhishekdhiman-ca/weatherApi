const fetchWeatherData = async () => {
  const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Toronto&format=json&u=c';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '737b5b8023msh5dc8759b04faf33p1be655jsn98f86fc2f298',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  try {
    const response = await Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000) // Timeout after 10 seconds
      )
    ]);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export { fetchWeatherData };
