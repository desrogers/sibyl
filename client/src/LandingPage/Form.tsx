import {
  IconButton,
  Container,
  Grid,
  Paper,
  styled,
  Divider,
  makeStyles,
  InputBase,
  withStyles,
} from "@material-ui/core";
import { MyLocationTwoTone, Search } from "@material-ui/icons";
import React from "react";

const StyledForm = withStyles({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "2px 4px",
    alignItems: "center",
    width: 400,
  },
})(Paper);

const FormContainer = styled(Container)({
  position: "absolute",
  top: 150,
});

const useStyles = makeStyles({
  iconButton: {
    padding: 10,
  },
  input: {
    width: 300,
    flex: 1,
  },
  divider: {
    height: 28,
    margin: "auto 12px auto 2px",
  },
});

export default function Form() {
  const classes = useStyles();
  return (
    <FormContainer>
      <Grid container justify="center">
        <Grid item></Grid>
        <Grid
          item
          container
          xs={6}
          direction="row"
          wrap="nowrap"
          justify="center"
        >
          <Grid item>
            <StyledForm component="form" elevation={2}>
              <IconButton
                className={classes.iconButton}
                aria-label="my location"
              >
                <MyLocationTwoTone />
              </IconButton>
              <Divider orientation="vertical" className={classes.divider} />
              <InputBase className={classes.input} placeholder="Search" />
              <IconButton
                className={classes.iconButton}
                type="submit"
                aria-label="search"
              >
                <Search />
              </IconButton>
            </StyledForm>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </FormContainer>
  );
}
