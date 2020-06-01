import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Planet(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const onChangeHandler = (name) => {
    setValue(name);
    props.handlePlanet_name(name);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">
        {props.destination}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        label={props.destination}
      >
        {props.planetList.map((planet) => {
          return (
            <MenuItem value={planet.name} key={planet.distance}>
              {planet.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default Planet;
