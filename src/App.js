import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cityName:'',
      current:{},
      forecasts:[],
      limit:5,
    };
  }
 


async componentDidMount(){
  try{
    const response =await axios('https://jr-weather-api.herokuapp.com/api/weather?city=brisbane&&cc=au')
    const data =response.data.data;
    const cityName=data.city.name;
    const current=data.current;
    const forecasts=data.forecast.slice(0,10);
    console.log(current);
    this.setState({cityName,current,forecasts});
  }catch(err){
    console.log(err)
  }

}


handleChangelimit = limit =>{
  this.setState({limit});
}

render(){
  console.log(this.handleChangelimit)
  return (
    <div className="weather-channel__container">
    <Header />
    <Navigation />
    <Main 
    
        cityName={this.state.cityName}
        current={this.state.current}
        forecasts={this.state.forecasts}
        handleChangelimit={this.handleChangelimit}
        limit={this.state.limit}
        
        />
    <Footer />
    </div>
  );
}
}


export default App;
