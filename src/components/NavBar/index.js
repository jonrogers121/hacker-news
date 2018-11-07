import React from 'react'
import {Navbar, NavbarItem} from 'bloomer';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <Navbar style={{border: 'solid 1px #ff6600', margin: '0'}}>
                <NavbarItem>
                    <a href="/">
                        <img src='https://news.ycombinator.com/y18.gif' alt='logo' />
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'news'}>
                        News
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'ask'}>
                        Ask
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'newest'}>
                        Newest
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'show'}>
                        Show
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'jobs'}>
                        Jobs
                    </Link>
                </NavbarItem>
            </Navbar>
        )
    }
}

export default NavBar
