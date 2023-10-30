import React from 'react';
import Button from '@mui/material/Button';

function InviteButton() {
  const handleButtonClick = () => {
    // Handle the button click event
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleButtonClick}>Click me</Button>
    </div>
  );
}

export default InviteButton;
