import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IndexPage} from "./pages/index-page.tsx";
import {LoginPage} from "./pages/login-page.tsx";
import {RegisterPage} from "./pages/register-page.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
