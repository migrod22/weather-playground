import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { fetchWeather } from "../services/services"

const WeatherPage = () => {

    const [weatherLocation, setWeatherLocation] = useState("")
    const [weatherTemperature, setWeatherTemperature] = useState(0)

    const checkWeather = async (location) => {
        try {
            const weatherData = await fetchWeather(location)
            setWeatherTemperature(weatherData.current.temp_c)
        } catch (error) {
            console.error('Error fetching health status:', error)
        }
    }


    const onCheckWeather = () => {
        checkWeather(weatherLocation ? weatherLocation : "")
        console.log('weatherLocation', weatherLocation)
    }


    const onInputChange = (e) => {
        setWeatherTemperature(null)
        setWeatherLocation(e.target.value)
    }

    return (
        <>
            <div className="flex items-center justify-center p-4">
                <Stack>
                    <TextField
                        type="text"
                        onChange={onInputChange}
                        variant="outlined"
                        label="Location"
                        className="mr-2"
                    />
                    <Button
                        onClick={onCheckWeather}
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </Stack>
            </div>

            {weatherLocation && weatherTemperature && (
                <div className='flex items-center justify-center'>
                    <Stack>
                        <Typography variant="h6" className="mt-4">
                            Location: {weatherLocation}
                        </Typography>
                        <Typography variant="subtitle1" className="mt-4">
                            Temperature (Cº): {weatherTemperature}
                        </Typography>
                    </Stack>
                </div>
            )}
        </>
    )
}

export default WeatherPage