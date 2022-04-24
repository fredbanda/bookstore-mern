import { Box, Typography } from "@mui/material";
import React from "react";
import Content from "../components/Content/Content";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4">
          Part of Portfolio for Fred Banda
        </Typography>
      </Box>
      <>
      <Content />
      </>
    </div>
  );
};

export default About;