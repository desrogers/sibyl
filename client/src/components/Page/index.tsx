import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "../NavBar";

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      {children}
    </>
  );
}
