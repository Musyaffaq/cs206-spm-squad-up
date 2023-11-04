import React from 'react';

const eventToImage = {
    "Citi HackOverflow 2023": "/Citi_Hack.png",
    "SMU LIT Hackathon 2023": "/LIT_Hack.png",
    "SG-IN Hackathon 2023": "/G20_Hack.png",
    "Technica 2023": "/Technica_Hack.png"
  };

const ImageMapper = ({ inputString }) => {
  // Get the image URL based on the input string from the mapping
  const imageUrl = eventToImage[inputString];

  if (!imageUrl) {
    return <div>No image found for {inputString}</div>;
  }

  return (
    <div>
      <img src={imageUrl} alt={inputString} style = {{width: 400, height: 300}}/>
    </div>
  );
};

export default ImageMapper;