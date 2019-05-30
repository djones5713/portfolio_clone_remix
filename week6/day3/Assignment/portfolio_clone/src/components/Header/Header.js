import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
    }

    toggleNavBar = () => {

        this.setState((prevState) => {

            return {
                toggle: !prevState.toggle
            }
        })
    }

    render(){
        const { toggle } = this.state
        console.log(toggle)
        return <header>
            <div>
                <div className="Logo">Start Bootstrap</div>
                <button onClick={this.toggleNavBar}>Menu</button>
                <nav className={toggle ? 'show' : ""}>
                    <ul>
                        <li><a href="#/Service">Service</a></li>
                        <li><a href="#/Portfolio">Portfolio</a></li>
                        <li><a href="#/About">About</a></li>
                        <li><a href="#/Team">Team</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}