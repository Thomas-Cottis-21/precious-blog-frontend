import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home-page.tsx";
import {LoginPage} from "./pages/login-page.tsx";
import {RegisterPage} from "./pages/register-page.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.ts";

function App() {

  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path={"/login"} element={<LoginPage />} />
                      <Route path={"/register"} element={<RegisterPage />} />
                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
      </Provider>
  )
}

export default App
