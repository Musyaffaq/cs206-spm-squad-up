
import * as React from 'react';
import LIT from '../Image/LIT.png';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardActions,
    Button,
  } from "@mui/material";

  


function ImageCard() {
    return (
        <Card variant="plain" sx= {{ width: 640 }}>
                    <img
                        src={LIT}
                    />
        </Card>
    )
}

export default ImageCard;