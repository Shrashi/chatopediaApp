import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "pages/homePage";
import Loginpage from "pages/loginPage";
import Profilepage from "pages/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  const renderHome = () => {
    let comp;
    if (isAuth) {
      comp = <Homepage />;
    } else {
      comp = <Navigate to="/" />;
    }
    return comp;
  };
  const renderProfile = () => {
    let comp;
    if (isAuth) {
      comp = <Profilepage />;
    } else {
      comp = <Navigate to="/" />;
    }
    return comp;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home" element={renderHome()} />
            <Route path="/profile/:userId" element={renderProfile()} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
