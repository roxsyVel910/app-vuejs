import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-18.0146&longitude=-70.2536&hourly=temperature_2m&timezone=auto'

export const getTemperatura = ( => {
    await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.hourly.temperature_2m[0]
    return nuevaTemperatura
}),