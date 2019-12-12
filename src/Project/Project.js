import React, { Component } from 'react'
import './Project.css'

export default class Project extends Component {
    render(){
        return(
            <div className='project_page'>
                <div className='project_title'>
                    <h1>{this.props.title}</h1>
                </div>
                <div className='preview'>
                    <img alt={this.props.title} src={this.props.preview} />
                </div>
                <div className='description'>
                    <p>{this.props.description}</p>
                </div>
                <div>  
                    {this.props.github}
                </div>
                <div>
                    {this.props.deployment}
                </div>
            </div>
        )
    }
}