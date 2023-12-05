import { useEffect } from 'react';
import './App.css';
import { fetchWeather } from './services/services';

function App() {


  const checkWeather = async () => {
    try {
      const weatherData = await fetchWeather()
      console.log('weatherData', weatherData)
    } catch (error) {
      console.error('Error fetching health status:', error)
    }
  }

  useEffect(() => {
    checkWeather()
  }, [])

  return (
    <>
      <div className='bg-green-500 flex items-center justify-center'>
        Hi
      </div>
    </>

  );
}

export default App;
