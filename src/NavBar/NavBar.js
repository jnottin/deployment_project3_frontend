import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar" >
                <Link to="/">RoomKind</Link>
            </div>
        );
    }
}


export default NavBar;