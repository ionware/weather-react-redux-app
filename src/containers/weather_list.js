import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkChart from '../components/chart';


class WeatherList extends Component{
    renderCity(data){
        const name = data.city.name;
        const temp = data.list.map((value) => {
            return value.main.temp;
        });

        const pressure = data.list.map((value) => {
            return value.main.pressure;
        });

        const humidity = data.list.map((value) => {
            return value.main.humidity;
        });

        console.log(temp, pressure, humidity);

        return (
            <tr key={ name }>
                <td>{ name }</td>
                <td><SparkChart forecast={temp} color="red" /></td>
                <td><SparkChart forecast={humidity} color="green"/></td>
                <td><SparkChart forecast={pressure} color="blue"/></td>
            </tr>
        )
    }

    render(){

        //if(!this.props.weather){
        //    return (
        //        <div></div>
        //    )
        //}

        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderCity) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);