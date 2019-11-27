import React, { Component } from 'react';
import './HomeNav.css'
import '../NavTab/NavTab'
import NavTab from '../NavTab/NavTab';

export default class HomeNav extends Component {


    render(){
        return (
            <div className='Side_Nav'>
                <ul className='Base_Tabs Tabs'>
                    <li><NavTab tabName={'Cover'}/></li>
                    <li><NavTab tabName={'About Me'}/></li>
                    <li><NavTab tabName={'Projects'}/></li>
                </ul>
            </div>
        )
    }
}
