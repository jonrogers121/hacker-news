import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarItem} from 'bloomer';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar style={{border: 'solid 1px #ff6600', margin: '0'}}>
                <NavbarItem>
                    <Link to={'/'}>
                        News
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/ask'}>
                        Ask
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/newest'}>
                        Newest
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/show'}>
                        Show
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/jobs'}>
                        Jobs
                    </Link>
                </NavbarItem>
            </Navbar>
        )
    }
}

export default NavBar
