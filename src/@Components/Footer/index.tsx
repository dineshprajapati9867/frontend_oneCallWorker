import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import { InstagramColoredIcon, WhatsAppIcon } from "@Icons/SocialMediaIcons";
const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  borderTop:`1px solid ${theme.misc.borderColor}`,
  
  ".container": {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  ".title": {
    fontWeight: 600,
    marginBottom: "10px",
  },

  ".link": {
    fontSize: "14px",
    marginBottom: "6px",
    cursor: "pointer",
    // "&:hover": {
    //   color: "#51ACF8",
    // },
  },

  ".social": {
    display: "flex",
    gap: "12px",
    marginTop: "10px",

    // "& svg": {
    //   cursor: "pointer",
    //   transition: "0.3s",
    // //   "&:hover": {
    // //     color: "#51ACF8",
    // //     transform: "scale(1.1)",
    // //   },
    // },
  },

  ".bottom": {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "13px",
    opacity: 0.7,
  },
}));

function Footer() {
  return (
    <FooterWrapper>
      <Box className="container">
        <Grid container spacing={4} columnSpacing={30}>

          {/* About */}
          <Grid item xs={12} md={3}>
            <Typography className="title">OneCallWorker</Typography>
            <Typography className="link">
              Find skilled workers near you. Connect directly with trusted professionals.
            </Typography>

            {/* Follow Us */}
            <Box className="social">
              <InstagramColoredIcon/>
               <WhatsAppIcon/>
            </Box>
          </Grid>

          {/* Customers */}
          <Grid item xs={6} md={2}>
            <Typography className="title">For Customers</Typography>
            <Typography className="link">Find Workers</Typography>
            <Typography className="link">Browse Services</Typography>
            <Typography className="link">How It Works</Typography>
          </Grid>

          {/* Workers */}
          <Grid item xs={6} md={2}>
            <Typography className="title">For Workers</Typography>
            <Typography className="link">Create Profile</Typography>
            <Typography className="link">Get Work</Typography>
            <Typography className="link">Guidelines</Typography>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography className="title">Services</Typography>
            <Typography className="link">Electrician</Typography>
            <Typography className="link">Plumber</Typography>
            <Typography className="link">Painter</Typography>
            <Typography className="link">Carpenter</Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={3}>
            <Typography className="title">Contact</Typography>
            <Typography className="link">Mumbai, India</Typography>
            <Typography className="link">support@onecallworker.com</Typography>
          </Grid>

        </Grid>

        <Typography className="bottom">
          © 2026 OneCallWorker. All rights reserved.
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;