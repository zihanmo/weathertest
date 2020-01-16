import React from 'react';

function ForecastRow(props) {
	return (
		<div className="weather-forecast__row">
			<span className="weather-forecast__day">{props.day}</span>
			<span className="weather-forecast__icon">
				<i className="fa fa-clock-o" />
				{props.time}
			</span>
			<span className="weather-forecast__high">{props.high}</span>
			<span className="weather-forecast__low">{props.low}</span>
		</div>
	);
}

export default ForecastRow;
