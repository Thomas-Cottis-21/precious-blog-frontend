import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home-page.tsx";
import {LoginPage} from "./pages/login-page.tsx";
import {RegisterPage} from "./pages/register-page.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";

function App() {

  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path={"/login"} element={<LoginPage />} />
                  <Route path={"/register"} element={<RegisterPage />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  )
}

export default App
