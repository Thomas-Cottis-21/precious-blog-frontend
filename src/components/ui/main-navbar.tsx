import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


export const MainNavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand style={{
                    fontFamily: "Alice",
                }}>
                    <img
                        src="../../../public/images/logo/Pink_blue_floral_bouquet_with_watercolor-removebg-preview.png"
                        alt="logo"
                        width="120"
                    />
                    You are precious
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item as={Link} to="/">Home</Nav.Item>
                        <Nav.Item as={Link} to="/">Categories</Nav.Item>
                        <Nav.Item as={Link} to="/">About</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}