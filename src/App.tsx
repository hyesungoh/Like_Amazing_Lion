import React from "react";
import AppRouter from "Router/Router";
import { ThemeProvider } from "@material-ui/core";

import { theme } from "assets/Theme/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
