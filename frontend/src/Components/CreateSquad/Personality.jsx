// source - https://mui.com/material-ui/react-select/#basic-select
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function BasicSelect({ updatePersonality, type }) {
  const [personality, setPersonality] = React.useState([]);

  const handleChange = (event, newPersonalities) => {
    setPersonality(newPersonalities);
    updatePersonality(newPersonalities);
  };

  const handleChange2 = (personality) => {
    setPersonality(personality.target.value);
    updatePersonality(personality.target.value);
  };

  return (
    <>
      {type == "squad" ? (
        <Autocomplete
          multiple
          id="tags-outlined"
          options={personalities}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Desired Personalities" />
          )}
        />
      ) : (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Personality</InputLabel>
            <Select
              value={personality}
              label="Personality"
              onChange={handleChange2}
            >
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
      )}
    </>
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
