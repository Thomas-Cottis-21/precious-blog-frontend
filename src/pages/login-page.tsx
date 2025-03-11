import {useDispatch} from "react-redux";
import {login} from "../redux/slices/auth-slice.ts";
import {AppDispatch} from "../redux/store.ts";
import {Container, Form} from "react-bootstrap";
import {useState} from "react";
import {Button} from "@mui/material";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate: NavigateFunction = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await dispatch(login({username, password}));
    }

    return (
        <Container>
            <h1>LOGIN</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
            </Form>
            <Button onClick={handleLogin} type="submit">Login</Button>
            <Button onClick={() => navigate("/register")}>Sign up</Button>
        </Container>
    );
}