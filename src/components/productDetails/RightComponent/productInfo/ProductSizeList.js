import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import SingleSizeBlock from "../../../common/productList/singleProduct/sizeList/SingleSizeBlock";
import { Typography } from "@material-ui/core";

export default function ProductSizeList({ sizes, setSize }) {


    const handleChange = (size) => {
        setSize(size)
    }
  return (
    <div>
      <Typography variant="h6">Style Size</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          {sizes.map((val, key) => {
            return (
              <FormControlLabel
                onChange={() => handleChange(val)}
                value={val}
                control={<Radio color="primary" />}
                label={
                  <div style={{ width: "34px", textAlign: "center" }}>
                    <SingleSizeBlock key={key} sizeValue={val} flag />
                  </div>
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
