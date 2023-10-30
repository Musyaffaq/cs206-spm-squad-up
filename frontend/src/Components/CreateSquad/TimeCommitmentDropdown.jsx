import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useState } from "react";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function TimeCommitmentDropdown({ updateTimeCommitment }) {
  const [timeCommitment, setTimeCommitment] = useState(5);

  const handleTimeCommitmentChange = (event, newTimeCommitment) => {
    setTimeCommitment(newTimeCommitment);
    updateTimeCommitment(newTimeCommitment);
  };

  return (
    <>
      <Typography id="time-commitment" gutterBottom>
        Time Commitment (hour(s) per day)
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="time-commitment"
          defaultValue={5}
          getAriaValueText={valuetext}
          step={1}
          min={0}
          max={10}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleTimeCommitmentChange}
        />
      </Box>
    </>
  );
}
