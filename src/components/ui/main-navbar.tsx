import {Container, Nav, Navbar} from "react-bootstrap";
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
                    You are precious
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}