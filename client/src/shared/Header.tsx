import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";

type Props = {
  children: string;
};

export default function Header({ children }: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const headerVariant = matches ? "h2" : "h4";

  return (
    <header>
      <Typography align="center" variant={headerVariant} noWrap component="h1">
        {children}
      </Typography>
    </header>
  );
}
