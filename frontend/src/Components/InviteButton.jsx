import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function InviteButton() {
  const handleButtonClick = async () => {

    

    try {
      const response = await axios.post('/add-user', squadName, memberName);
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
