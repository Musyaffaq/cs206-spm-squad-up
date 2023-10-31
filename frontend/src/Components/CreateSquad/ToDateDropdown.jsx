import { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ToDateDropdown({ updateToDate }) {
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date as a string

  const handleSkillsChange = (newValue) => {
    setSelectedDate(newValue.$d.toJSON());
    updateToDate(newValue.$d.toJSON());
    console.log(newValue.$d.toJSON());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="To Date"
        value={selectedDate}
        onChange={handleSkillsChange}
        renderInput={(params) => (
          <TextField {...params} style={{ margin: 10 }} />
        )}
      />
    </LocalizationProvider>
  );
}

export default ToDateDropdown;
