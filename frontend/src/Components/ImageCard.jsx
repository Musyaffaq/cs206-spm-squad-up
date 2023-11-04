
import * as React from 'react';
import ImageMapper from './ImageMapper';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardActions,
    Button,
  } from "@mui/material";




function ImageCard({Event}) {
    return (
        <Card variant="plain" sx= {{ width: 850 }}>
            <div>
                <ImageMapper inputString={Event} />
            </div>

        </Card>
    )
}

export default ImageCard;