import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1350,
  //     lgBig: 1450,
  //     xl: 1500,
  //     xxl: 1700,
  //   },
  // },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
