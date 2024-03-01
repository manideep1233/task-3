import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°c</p>
                <div className="details">
                    <div className="parameter-row ">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">FeelsLike</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°c</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-value">{data.wind.speed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humdity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}hpa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeather;