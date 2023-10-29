// source - https://mui.com/material-ui/react-select/#basic-select
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ updateEventName }) {
  const [eventName, setEventName] = React.useState("");

  const handleChange = (event) => {
    setEventName(event.target.value);
    updateEventName(eventName);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Event Name</InputLabel>
        <Select value={eventName} label="EventName" onChange={handleChange}>
          <MenuItem value={"smu-lit-2023"}>SMU LIT Hackathon 2023</MenuItem>
          <MenuItem value={"ellipsis-2023"}>Ellipsis Tech Series 2023</MenuItem>
          <MenuItem value={"codesprint-2023"}>CodeSprint 2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
