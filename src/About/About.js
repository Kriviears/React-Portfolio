import React, { Component } from 'react';
import './About.css'

export default class About extends Component {

    render(){
        return(
            <div className='about-me'>
                <h1>Reasons why you should hire me</h1>

                <p>Technologies I am proficient in: </p>
                <ul>
                    <li>React</li>
                    <li>Jquery</li>
                    <li>SQL/PostgreSQL</li>
                    <li>Nodejs</li>
                    <li>api unit testing</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <a href="github.com/kriviears">My Github</a>
                <a href="linkedin.com/kriviears">My LinkedIn</a>
            </div>
        )
    }
}