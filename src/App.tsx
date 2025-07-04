import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { IssuesProvider } from "./contexts/IssuesContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
         <BrowserRouter>  
            <Router/>
        </BrowserRouter>
      </IssuesProvider>

      <GlobalStyle/>
    </ThemeProvider>
  )
}

