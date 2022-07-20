import React, { useEffect, useState } from 'react'
import axios from 'axios'

//https://api.openweathermap.org/data/2.5/onecall?lat=60.48&lon=22.32&lang=en&units=metric&appid=3b5b2951d35f33997c919193b72dfd47
//lat=60.48&lon=22.32
function Weather(props){
    const lat = props.lat
    const lon = props.lon
    const API_key = "3b5b2951d35f33997c919193b72dfd47"
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${API_key}`
    const [weather, setWeather] =  useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setWeather(response.data)

            })
    }, [url])

    if(weather){
        content =
        <div>
            {weather.current.temp} °C
            <br></br>
            {weather.current.wind_speed} m/s
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Weather