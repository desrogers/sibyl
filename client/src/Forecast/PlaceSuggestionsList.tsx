import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";

type ListProps = {
  suggestions: any;
  handleSelect: ({ description }: any) => () => void;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  itemText: {
    textAlign: "end",
  },
});

export default function PlaceSuggestionsList({
  suggestions,
  handleSelect,
}: ListProps) {
  const { data, status } = suggestions;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List dense disablePadding>
        {status === "OK" &&
          data.slice(0, 4).map((suggestion: any) => {
            const {
              place_id,
              structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
              <ListItem
                button
                key={place_id}
                onClick={handleSelect(suggestion)}
              >
                <ListItemText primary={main_text} />
                <ListItemText
                  primary={secondary_text}
                  className={classes.itemText}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
