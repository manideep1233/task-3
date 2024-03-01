import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const week_days = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];
const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastdays = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek));
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.forecastResponse.list.splice(0, 5).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastdays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°c/ {Math.round(item.main.temp_max)}°c</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-deatlis-grid">
                                <div className="daily-details-grid-item">
                                    <label>pressure</label>
                                    <label>{item.main.pressure}hpa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>wind speed</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>sea-level</label>
                                    <label>{item.main.sealevel}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>FeelsLike</label>
                                    <label>{Math.round(item.main.feels_like)}°c</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
export default Forecast;