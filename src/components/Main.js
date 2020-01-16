import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';


function Main(props){

console.log(props.current)
console.log(props.handleChangeLimit)	
	
	return (
		
		<main>
			<WeatherCondition 
			cityName={props.cityName} 
			current={props.current}
			 
			 />
			<WeatherForecast 
			
			forecasts={props.forecasts} 
			limit={props.limit}
			handleChangeLimit={props.handleChangeLimit}
			/>
		</main>
	);
	
	}

export default Main;
