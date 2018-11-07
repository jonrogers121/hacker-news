import React from 'react'
import {Navbar, NavbarItem} from 'bloomer';

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
                    <a href="news">
                        News
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="ask">
                        Ask
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="newest">
                        Newest
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="show">
                        Show
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="jobs">
                        Jobs
                    </a>
                </NavbarItem>
            </Navbar>
        )
    }
}

export default NavBar
