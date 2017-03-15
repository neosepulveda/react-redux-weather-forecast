import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);

    return(
      <tr key={city.id}>
        <td>{city.name}</td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
