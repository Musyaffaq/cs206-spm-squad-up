import { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FromDateDropdown({ type }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="From Date"
        // value={startDate}
        // onChange={(newValue) => {
        //   setStartDate(newValue.$d.toJSON());
        // }}
        renderInput={(params) => (
          <TextField {...params} style={{ margin: 10 }} />
        )}
      />
    </LocalizationProvider>
  );
}

export default FromDateDropdown;
