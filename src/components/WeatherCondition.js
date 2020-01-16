import React from 'react';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';


class WeatherCondition extends React.Component{
render(){
	const {current ,cityName}=this.props;

	return (
		<section className="weather-condition">
			<div className="weather-condition__location">{cityName}</div>
			<div className="weather-condition__overview">Clear</div>
			<div className="weather-condition__temp">{current.maxCelsius}</div>
			<div className="weather-condition__desc">
				<div>
					<img src={umberella} />
					<span className="citem">{current.humidity}</span>
				</div>
				<div>
					<img src={wind} />
					<span className="citem">{current.windSpeed}</span>
				</div>
				<div>
					<img src={compass} />
					<span className="citem">{current.windDirection}</span>
				</div>
			</div>
		</section>
	);
}
}
export default WeatherCondition;
