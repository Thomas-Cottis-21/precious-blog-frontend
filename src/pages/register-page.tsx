import {NavigateFunction, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export const RegisterPage = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div>
            <h1>REGISTER</h1>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/")}>Home</Button>
        </div>
    );
}