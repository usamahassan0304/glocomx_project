import React from 'react'
import { LogoStyle, TopbarSectionStyle } from './topbarStyle';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Topbar = () => {
    return (
        <>
            <TopbarSectionStyle>
                <Navbar expand="lg" variant="dark" bg="none">
                    <Container >
                        <Navbar.Brand><LogoStyle /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto text-white">
                                <Nav.Link>Shop</Nav.Link>
                                <Nav.Link>Tokens</Nav.Link>
                                <Nav.Link>Portfolio</Nav.Link>
                                <Nav.Link>Roadmap</Nav.Link>
                                <Nav.Link>FAQ</Nav.Link>
                                <Nav.Link>Team</Nav.Link>
                                <Nav.Link>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </TopbarSectionStyle>
        </>
    )
}

export default Topbar;