import { styled, Box } from "@material-ui/core";
import React from "react";
import Page from "./PageTemplate";

type Props = {
  children: React.ReactNode;
};

const Spacer = styled(Box)({
  height: 60,
});

export default function PageTemplateWithSpacer({ children }: Props) {
  return (
    <Page>
      <Spacer />
      {children}
    </Page>
  );
}
