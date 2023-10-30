import React, { useState } from 'react';
import axios from 'axios';

function handleButtonClick() {
    const squadName = "My Squad";
    const memberName = "Asdfsdf";

    const addUser = async () => {
      try {
        const response = await axios.post('/add-user', { squadName, memberName });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

export default handleButtonClick;
  