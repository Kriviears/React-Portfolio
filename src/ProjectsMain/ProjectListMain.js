import React, { Component } from 'react'
import './ProjectListMain.css'
import AppContext from '../AppContext'
import '../Project/Project'
import Project from '../Project/Project'

export default class ProjectListMain extends Component {
    static contextType = AppContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render(){
        const { projects } = this.context;
        console.log(projects);
        
        return(
            <div className='Project_List'>
                <ul className='list'>
                    {
                        projects.map((project, index) =>
                            <li className='project'>
                                <Project 
                                    title={project.name}
                                    preview={project.preview}
                                    github={project.githubPage}
                                    deployment={project.deployment}
                                    description={project.description}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
