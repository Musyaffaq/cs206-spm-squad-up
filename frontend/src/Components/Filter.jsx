import React, { useState } from 'react';
import SkillsDropdown from "../Components/CreateSquad/SkillsDropdown";
import TimeCommitmentDropdown from "../Components/CreateSquad/TimeCommitmentDropdown";
import Personality from "../Components/CreateSquad/Personality";



function Filter() {
    const [filter, setFilter] = useState('');
    
    return (
        <div>
        <TimeCommitmentDropdown />
        <SkillsDropdown />
        <Personality />
        </div>
    );
}

export default Filter;