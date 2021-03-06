import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SearchBar extends Component
{
    constructor(props){
        super(props);

        this.state = {
            term : ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);

        this.setState({term: ""});
    }

    render(){
        return (
                   <form className='input-group' onSubmit={ this.onFormSubmit }>
                       <input className='form-control' placeholder='Enter City'
                           onChange={ this.onInputChange }
                           value={ this.state.term }/>
                        <span className='input-group-btn'>
                            <button className='btn btn-primary'>Search</button>
                        </span>
                   </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);