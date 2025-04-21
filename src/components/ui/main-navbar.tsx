import {Container, Nav, Navbar} from "react-bootstrap";
<<<<<<< HEAD
import globalStyle from "../../styles/global.module.css";

export const MainNavBar = () => {
    return (
        <Navbar expand="md" style={{
            fontFamily: "Playfair Display",
            backgroundColor: "#3a5a40"
        }}>
            <Container>
                <Navbar.Brand style={{
                    color: "whitesmoke"
                }}>
=======
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
>>>>>>> cbb956e78052cfa6a084230838dd3e7fa88105c7
                    You are precious
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
<<<<<<< HEAD
                        <Nav.Link style={{
                            color: "whitesmoke"
                        }}>Home</Nav.Link>
                        <Nav.Link style={{
                            color: "whitesmoke"
                        }}>Categories</Nav.Link>
                        <Nav.Link style={{
                            color: "whitesmoke"
                        }}>Subscribe</Nav.Link>
                    </Nav>
                    <div className={"d-flex"}>
                        <button className={globalStyle.navButton}>Login</button>
                        <button className={globalStyle.navButton}>Sign up</button>
                    </div>
=======
                        <Nav.Item as={Link} to="/">Home</Nav.Item>
                        <Nav.Item as={Link} to="/">Categories</Nav.Item>
                        <Nav.Item as={Link} to="/">About</Nav.Item>
                    </Nav>
>>>>>>> cbb956e78052cfa6a084230838dd3e7fa88105c7
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}