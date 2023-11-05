import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SkillsDropdownEdit({ updateSkills }) {
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
        <TextField {...params} label="Skills" />
      )}
    />
  );
}

const skills = [
  "Python",
  "JavaScript",
  "Java",
  "React",
  "SQL",
  "MongoDB",
  "Presentation",
  "Slides",
  "Report Writing",
  "Project Management",
  "Communication Skills",
  "Teamwork",
  "Problem-Solving",
  "Adaptability",
  "Leadership",
  "Time Management",
  "Organizational Skills",
  "Analytical Skills",
  "Technical Skills",
  "Customer Service",
  "Creativity",
  "Sales and Marketing",
  "Financial Literacy",
  "Networking",
  "Emotional Intelligence",
  "C++",
  "Ruby",
  "HTML/CSS",
  "Angular",
  "Vue.js",
  "Node.js",
  "Django",
  "Ruby on Rails",
];
