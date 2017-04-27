import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    renderCity(data){
        const name = data.city.name;

        console.log(name);
        return (
            <tr>
                <td key={ name }>{ name }</td>
            </tr>
        )
    }

    render(){

        if(!this.props.weather){
            return (
                <div></div>
            )
        }

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
                    { this.props.weather.map(this.renderCity)}
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