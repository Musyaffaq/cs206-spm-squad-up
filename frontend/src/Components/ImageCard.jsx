
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
        <Card variant="plain" sx= {{ width: 850 }}>
                    <img
                        src={LIT} style = {{width: 850, height: 660}}
                    />
        </Card>
    )
}

export default ImageCard;