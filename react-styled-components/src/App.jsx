import { ThemeProvider, createGlobalStyle } from 'styled-components'
import "./App.css";
import logo from './assets/react.svg'
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles'

// Theming
const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      <StyledButton>Button 1</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Button 2</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Button 3</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
      <AnimatedLogo src={logo} />
      <DarkButton>Dark Button</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
