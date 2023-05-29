// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./scenes/sharedlayout";
import Dashboard from "./scenes/dashboard";
import LoginForm from "./scenes/login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import { PrivateRoutes, PublicRoutes } from "./components/PrivateRoutes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
            {/* </Route> */}

            {/* <Route element={<PublicRoutes />}> */}
            <Route path="/login" element={<LoginForm />} />
            {/* </Route> */}
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
