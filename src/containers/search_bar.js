import React, { Component } from 'react';

class SearchBar extends Component
{
    constructor(props){
        super(props);

        this.state = {
            term : ""
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term : event.target.value});
    }

    render(){
        return (
           <div className='row text-center'>
               <div className='col-md-6'>
                   <form className='input-group'>
                       <input className='form-control' placeholder='Enter City'
                           onChange={ this.onInputChange }
                           value={ this.state.term }/>
                        <span className='input-group-btn'>
                            <button className='btn btn-primary'>Search</button>
                        </span>
                   </form>
               </div>
           </div>
        );
    }
}


export default SearchBar;