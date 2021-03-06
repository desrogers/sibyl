import {
  IconButton,
  Grid,
  Paper,
  styled,
  Divider,
  makeStyles,
  InputBase,
  withStyles,
  Box,
} from "@material-ui/core";
import { MyLocationTwoTone, Search } from "@material-ui/icons";
import React, { ChangeEvent } from "react";
import { GeolocatedProps } from "react-geolocated";
import PlaceSuggestionsList from "./PlaceSuggestionsList";

export type FormProps = {
  suggestions: any;
  getLocation: () => void;
  geolocatedRef: any;
  handleInput: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleSelect: ({ description }: any) => () => void;
  searchInputValue: string;
  searchInputRef: any;
  ready: boolean;
};

const StyledForm = withStyles({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "2px 4px",
    alignItems: "center",
    width: 700,
  },
})(Paper);

const FormContainer = styled(Box)({
  marginTop: 80,
});

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  formBox: {
    display: "inline-flex",
  },
  iconButton: {
    padding: 10,
  },
  input: {
    width: 300,
    flex: 4,
  },
  divider: {
    height: 28,
    margin: "auto 12px auto 2px",
  },
});

export default function Form({
  suggestions,
  getLocation,
  handleInput,
  handleSelect,
  searchInputRef,
  searchInputValue,
  ready,
}: FormProps & GeolocatedProps) {
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
              <div ref={searchInputRef} className={classes.root}>
                <Box className={`${classes.formBox} ${classes.root}`}>
                  <IconButton
                    className={classes.iconButton}
                    aria-label="my location"
                    onClick={getLocation}
                  >
                    <MyLocationTwoTone />
                  </IconButton>
                  <Divider orientation="vertical" className={classes.divider} />

                  <InputBase
                    className={classes.input}
                    onChange={handleInput}
                    disabled={!ready}
                    value={searchInputValue}
                    placeholder="Search"
                  />
                  <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={handleSelect({ description: searchInputValue })}
                  >
                    <Search />
                  </IconButton>
                </Box>
                <PlaceSuggestionsList
                  suggestions={suggestions}
                  handleSelect={handleSelect}
                />
              </div>
            </StyledForm>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </FormContainer>
  );
}
