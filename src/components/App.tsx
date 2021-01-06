import React from "react";
import AppRouter from "components/Router";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#F79E1C",
            main: "#F79E1C",
            dark: "#F79E1C",
            contrastText: "#F79E1C",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <AppRouter />
            </div>
        </ThemeProvider>
    );
}

export default App;
