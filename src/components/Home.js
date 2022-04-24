import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content/Content";

const Home = () => {
  return (
    
    <div>
      <>
        <Content />
      </>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Go To MERN 🔥  </Typography>
        </Button>
      </Box>
    </div>
    
  );
};

export default Home;