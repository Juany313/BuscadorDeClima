import { Weather } from "../../hooks/useWeather"

type WeatherDetailProps = {
    weather: Weather
}

const WeatherDetail = ({weather} : WeatherDetailProps) => {
  return (
    <div>Clima de:</div>
  )
}

export default WeatherDetail