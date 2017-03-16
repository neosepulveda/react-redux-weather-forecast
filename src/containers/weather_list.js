import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const list = cityData.list;

    const temps = list.map(weather => weather.main.temp);
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);

    return(
      <tr key={city.id}>
        <td>{city.name}</td>
        <td><Chart data={temps} color="blue" units="K" /></td>
        <td><Chart data={pressures} color="black" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //equal to { weather: state.weather } but using fancy ES6 syntax
}

export default connect(mapStateToProps)(WeatherList);
