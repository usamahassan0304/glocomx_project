import React from 'react';
import { Link } from "react-router-dom"
import { 
    LogoStyle,
    TopbarSectionStyle,
    
} from './topbarStyle';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Topbar : React.FC = () => {
    return (
        <>
            <TopbarSectionStyle>
                <Navbar expand="lg" variant="dark" bg="none">
                    <Container >
                        <Navbar.Brand><LogoStyle /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto text-white">
                                <Nav.Link href='#shop'>Shop</Nav.Link>
                                <Nav.Link href='#token'>Token</Nav.Link>
                                <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                                <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
                                <Nav.Link href='#faq'>FAQ</Nav.Link>
                                <Nav.Link href='#team'>Team</Nav.Link>
                                <Nav.Link href='#contact'>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </TopbarSectionStyle>
        </>
    )
}

export default Topbar;