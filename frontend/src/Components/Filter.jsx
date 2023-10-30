import React, { useState } from 'react';
import TimeCommitmentDropdown from './CreateSquad/TimeCommitmentDropdown';
import SkillsDropdown from './CreateSquad/SkillsDropdown';
import PersonalitySelect from './CreateSquad/';



function Filter() {
    const [filter, setFilter] = useState('');
    
    return (
        <div>
        <TimeCommitmentDropdown />
        <SkillsDropdown />
        <PersonalitySelect />
        </div>
    );
}

export default Filter;