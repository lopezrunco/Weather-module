import { useEffect, useState } from "react"

export default function Weather({ weatherData }) {
    const [weatherLogo, setWeatherLogo] = useState(null)
    const {
        weather,
        name,
        main: { temp, humidity }
    } = weatherData
    const [{ main }] = weather

    useEffect(() => {
        setWeatherLogo(getWeatherLogo(main))
    }, [weatherData, main])

    function getWeatherLogo(weather) {
        if (weather === 'Snow') return 'snow'
        if (weather === 'Clear') return 'sunny'
        if (weather === 'Rain') return 'rainy'
        if (weather === 'Haze') return 'haze'
        return 'haze'
    }

    return (
        <div>
            <small>{name}, Uruguay</small>
            <h2>{temp} °C</h2>
            <p>{main}</p>
            <small>Humedad: {humidity}%</small>
        </div>
    )
}