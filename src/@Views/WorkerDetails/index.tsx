import React from "react"

import new_thumb_icon from '@Assets/Images/new_thumb_icon.svg'
import { Box, styled, Typography } from "@mui/material"

const DetailsStyle = styled(Box)(({ theme }) => ({
    '.flexBox': {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(4)
    }
}))
export function WorkerDetails() {
    return <DetailsStyle>
        <Box>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjz0S_eXnprzunfLmYiQEBNzmWbs8_iWR5A&s"
                alt="image"
                className="image"
            />
            <Box className="right">
                <Box className="flexBox">

                    <img className="thumbIcon" src={new_thumb_icon} alt="thumb" />
                    <Typography variant="h5">
                        Shakti Electronics & Appliances (JioMart Digital Partner)</Typography>
                </Box>
            </Box>

        </Box>

    </DetailsStyle>
}