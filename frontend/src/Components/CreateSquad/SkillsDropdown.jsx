import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Tags() {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={skills}
      getOptionLabel={(option) => option.skill}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Skills Required" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const skills = [
  { skill: "Python", value: "python" },
  { skill: "JavaScript", value: "javascript" },
  { skill: "Java", value: "java" },
  { skill: "React", value: "react" },
  { skill: "SQL", value: "sql" },
  { skill: "MongoDB", value: "mongodb" },
];
