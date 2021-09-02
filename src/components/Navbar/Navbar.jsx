import React from 'react';

import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <NavbarBootstrap className='py-3 shadow' bg="light" variant="light">
            <Container>
                <NavbarBootstrap.Brand>Learn React</NavbarBootstrap.Brand>
                <Nav className="me-auto">
                    <Link className='text-decoration-none text-secondary mr-4' to='/'>Todo</Link>
                    <Link className='text-decoration-none text-secondary' to='/posts'>Post</Link>
                </Nav>
            </Container>
        </NavbarBootstrap>
    )
}

export default Navbar;