import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "./tim-mossholder-ULtV4JMRKaQ-unsplash.jpg";

const useStyles = makeStyles({
  hero: {
    height: 410,
    display: "block",
    "&:before": {
      backgroundColor: "blue",
      backgroundImage: `url('${heroImage}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      content: "''",
      display: "block",
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -2,
      opacity: 0.6,
    },
  },
  attribution: {
    paddingLeft: "1em",
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero}>
        <Typography
          variant="caption"
          classes={{ caption: classes.attribution }}
        >
          Photo by{" "}
          <Link
            underline="none"
            href="https://unsplash.com/@timmossholder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >
            Tim Mossholder
          </Link>{" "}
          on{" "}
          <Link
            underline="none"
            href="https://unsplash.com/s/photos/weather?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >
            Unsplash
          </Link>
        </Typography>
      </Box>
    </>
  );
}
