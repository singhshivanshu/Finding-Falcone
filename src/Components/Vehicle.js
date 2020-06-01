import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function Vehicle(props) {
    // console.log(props)
  const [value, setValue] = useState("");

  const vehicles = props.vehicleList;

  const onChangeHandler =(vehicle) => {
      setValue(vehicle);
      props.handleVehicle_name(vehicle);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.formLabel}</FormLabel>
      <RadioGroup
        aria-label="vehicle"
        name="vehicle1"
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {vehicles &&
          vehicles.map((vehicle) => {
            return (
              <FormControlLabel
                value={vehicle.name}
                control={<Radio />}
                label={`${vehicle.name} (${vehicle.total_no})`}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
}
export default Vehicle;
