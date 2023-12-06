import './App.css';
import { Typography } from '@mui/material';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <>
      <div className="bg-green-500 flex items-center justify-center p-4">
        <Typography variant="h4">Hi Weather App!</Typography>
      </div>
      <WeatherPage />
    </>
  );
}

export default App;
