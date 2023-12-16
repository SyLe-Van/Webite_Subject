import React from "react";
import "typeface-roboto";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

export default function Exercise1_4() {
  return (
    <>
      <FormGroup style={{ width: 200, margin: 10 }}>
        <MyTextInput />
        <MySelect />
      </FormGroup>
    </>
  );
}
