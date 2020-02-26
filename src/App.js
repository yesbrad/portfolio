import React from "react";
import Navigation from "./navigation";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Navigation />
        </ThemeProvider>
    );
}

export default App;
