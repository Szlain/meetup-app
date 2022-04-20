import React from "react";

import classes from "./MainNavigation.module.css";
import {Link} from 'react-router-dom'

const MainNavigation = () => {
    return (
        <header className={ classes.header }>
            <div className={ classes.logo }>My Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All meetups</Link></li>
                    <li><Link to="add">Add new meetup</Link></li>
                    <li><a href="/">My Favourites</a> <span className={ classes.badge }>0</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation