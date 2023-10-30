// source - https://mui.com/material-ui/react-select/#basic-select
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ updatePersonality }) {
  const [personality, setPersonality] = React.useState("");

  const handleChange = (personality) => {
    setPersonality(personality.target.value);
    updatePersonality(personality.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Personality</InputLabel>
        <Select value={personality} label="Personality" onChange={handleChange}>
          {personalities.map((personality, index) => {
            return (
              <MenuItem key={index} value={personality}>
                {personality}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

const personalities = [
  "Architect - INTJ",
  "Logician - INTP",
  "Commander - ENTJ",
  "Debater - ENTP",
  "Advocate - INFJ",
  "Mediator - INFP",
  "Protagonist - ENFJ",
  "Compaigner - ENFP",
  "Logistician - ISTJ",
  "Defender - ISFJ",
  "Executive - ESTJ",
  "Consul - ESFJ",
  "Virtuoso - ISTP",
  "Adventurer - ISFP",
  "Entrepreneur - ESTP",
  "Entertainer - ESFP",
];
