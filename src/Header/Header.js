import React, {Component} from 'react'
import AppContext from '../AppContext'
import './Header.css'


export default class Header extends Component {
    static contextType = AppContext;

    render(){
        const { currentPage } = this.context

        return(
            <div>
                <p className='subtitle'>{currentPage}</p>
            </div>
        )
    }
}