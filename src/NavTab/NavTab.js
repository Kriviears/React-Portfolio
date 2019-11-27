import React, { Component } from 'react';
import './NavTab.css'

export default class NavTab extends Component {

    render(){

        return(
            <div className='NavTab button'>
                {this.props.tabName}
            </div>
        )
    }
}