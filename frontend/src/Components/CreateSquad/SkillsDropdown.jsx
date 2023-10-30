import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SkillsDropdown({ updateSkills }) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillsChange = (event, newSkills) => {
    setSelectedSkills(newSkills);
    updateSkills(newSkills);
  };

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={skills}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      onChange={handleSkillsChange}
      renderInput={(params) => (
        <TextField {...params} label="Skills Required" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const skills = [
//   { skill: "Python", value: "python" },
//   { skill: "JavaScript", value: "javascript" },
//   { skill: "Java", value: "java" },
//   { skill: "React", value: "react" },
//   { skill: "SQL", value: "sql" },
//   { skill: "MongoDB", value: "mongodb" },
// ];
const skills = ["Python", "JavaScript", "Java", "React", "SQL", "MongoDB"];
