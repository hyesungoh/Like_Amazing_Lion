import React from "react";
import AppRouter from "components/Router";
import { ThemeProvider } from "@material-ui/core";

import { theme } from "components/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
