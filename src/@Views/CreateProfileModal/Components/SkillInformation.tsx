import { Box, styled } from '@mui/material'
import React from 'react'

const SkillStyle=styled(Box)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
}))
const SkillInformation = () => {
  return (
    <SkillStyle>
      
    </SkillStyle>
  )
}

export default SkillInformation
