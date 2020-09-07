import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/myscss.scss'
import logo from '../images/logo.png'
export default class Navbar extends Component {

  render() {
    return (
      
        <div className="box-shadow">
            <nav>
                <img src={logo} alt="Bobble AI">

                </img>
            </nav>
        </div>
        

        
    );
  }
}