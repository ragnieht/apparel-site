import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainNavBar from "./MainNavBar";

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <MainNavBar />
        <main>{props.children}</main>
      </Container>
    </React.Fragment>
  );
}
