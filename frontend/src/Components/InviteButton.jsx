import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function InviteButton() {
  const handleButtonClick = async () => {

    const squadName = "My Squad"
    const memberName = "aabbcc"
    
    const data = {
      squadName: squadName,
      memberName: memberName
    }
    console.log(data)
    try {
      const response = await axios.post('http://localhost:5000/add-user', data);
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleButtonClick}>Click me</Button>
    </div>
  );
}

export default InviteButton;
