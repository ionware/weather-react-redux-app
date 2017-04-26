import React, { Component } from 'react';

class SearchBar extends Component
{
    render(){
        return (
           <div className='row text-center'>
               <div className='col-md-6'>
                   <form className='input-group'>
                       <input className='form-control' placeholder='Enter City' />
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