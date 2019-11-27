import React, { Component } from 'react'
import './Projects.css'
import AppContext from '../AppContext'
import { Route, Link} from 'react-router-dom'

export default class Projects extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    renderProjectPage(){
        return(
            <>
                <Link
                    exact path='/'
                    component={Projects}
                />
                <Link
                    path='/:project_name'
                    component={Projects}
                />
            </>
        )
    }

    render(){
        return(
            <>

            </>
        )
    }
}
