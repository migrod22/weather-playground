import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});


const baseApiUrl = 'http://api.weatherapi.com/v1/current.json';
const queryParams = `?key=${process.env.REACT_APP_API_KEY}`;



export const fetchWeather = async () => {
    console.log('api', api)
    console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
    try {
        const response = await api.get(`${baseApiUrl}${queryParams}&q=Covilha&aqi=no`)
        console.log('response.data', response.data)
        return response.data
    } catch (error) {
        console.error('Error getting weather status:', error)
        throw error
    }
}
