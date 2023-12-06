import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});


const baseApiUrl = 'http://api.weatherapi.com/v1/current.json';
const queryParams = `?key=${process.env.REACT_APP_API_KEY}`;



export const fetchWeather = async (location) => {
    console.log('location fetchWeather', location)
    try {
        const response = await api.get(`${baseApiUrl}${queryParams}&q=${location ? location : null}&aqi=no`)
        console.log('response.data', response.data)
        return response.data
    } catch (error) {
        console.error('Error getting weather status:', error)
        throw error
    }
}
