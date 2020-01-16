import React, { cloneElement } from 'react';
import axios from 'axios';

import { compareAsc, format } from 'date-fns'

import ForecastRow from './ForecastRow';


class WeatherForecast extends React.Component{

	render(){
		const{limit}=this.props;
		const forecasts=this.props.forecasts.slice(0,limit);
		console.log(forecasts);
	
	return (

		<section class="weather-forecast">
			<div class="forecast__switch">
				<button 
				className={`forecast__swit_0 switch-active`}
				onClick={()=>this.props.handleChangelimit(5)}
				>
					5 items
					</button>
					
				<button 
				className={`forecast__switch_1`}
				onClick={()=>this.props.handleChangelimit(10)}
				>
					10 items</button>
			</div>
			{
				forecasts.map(forecastitem =>{
					
					const date=new Date(forecastitem.time*1000);
					const day=format(date,'EEE');
					const time = format(date,'HH:mm');
					return(
					<ForecastRow
					key={day + time}
					day={day}
					high={forecastitem.maxCelsius}
					low={forecastitem.minCelsius}
					time={time}
						
					/>
					)
					
				})
			}
		</section>
	);
	
}
}

export default WeatherForecast;
