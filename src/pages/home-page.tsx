import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>HOME</h1>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
        </div>
    );
}