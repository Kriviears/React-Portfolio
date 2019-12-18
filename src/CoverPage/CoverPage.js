import React, { Component } from 'react'
import './CoverPage.css'

export default class CoverPage extends Component {

    render(){
        return(
            <div className='CoverPage'>
                <h1>What I bring to the table</h1>
                <img src='https://cdn.discordapp.com/attachments/656305842563579914/656647238348570654/ddeb7TuR_400x400.png'
                    alt='Profile pic'
                />
                <p>I am a full stack devoloper specializing in React and REST Apis.</p>
                <p>my goal is to work for a big company and create systems that make interfacing with complicated data as easy and simple as possible for users on all levels</p>
                <p>I have managerial experience from retail and that self starter ability has allowed me to develop other projects from conception to deployment</p>
                <p>Please see the 'Projects' tab for some examples of that</p>
            </div>
        )
    }
}