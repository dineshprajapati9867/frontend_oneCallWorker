import { Box, styled } from '@mui/material'
import React from 'react'

const LocationStyle=styled(Box)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
}))
const LocationInformation = () => {
  return (
    <LocationStyle>
      
    </LocationStyle>
  )
}

export default LocationInformation