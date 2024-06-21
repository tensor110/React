import { createTheme, ThemeProvider, colors } from "@mui/material";
import FontsInputs from "./sections/FontsInputs";
import Layout from "./sections/Layout";
import Navigation from "./sections/Navigation";
import DataDisplay from "./sections/DataDisplay";
import Feedback from "./sections/Feedback";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { MuiCustomTheme } from "./components/MuiCustomTheme";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <FontsInputs /> */}
        {/* <Layout /> */}
        {/* <Navigation /> */}
        {/* <DataDisplay /> */}
        {/* <Feedback /> */}
        {/* <MuiResponsiveness /> */}
        <MuiCustomTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
