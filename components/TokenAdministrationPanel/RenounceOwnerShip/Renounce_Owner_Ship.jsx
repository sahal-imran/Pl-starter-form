import React, { useState } from "react";
import Topography from "@mui/material/Typography";
import Custom_Button from "../../Buttons/button";
import Box from "@mui/system/Box";

const Renounce_Owner_Ship = () => {
  return (
    <>
      <Topography
        sx={{
          fontSize: { md: "32px", xs: "20px" },
          fontWeight: 600,
          lineHeight: { md: "61px", xs: "38px" },
          color: "#FFFF",
          width: { md: "646px", xs: "100%" },
          minHeight: "366px",
          textAlign: "center",
          mt: 9,
          fontFamily: ["Source Code Pro", "monospace"],
        }}
      >
        {'“Please be advice - if you renounce ownership of the contract you will lose control as the owner, which means you cant change anything in contract.”'}
      </Topography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          justifyContent: "center",
          alignItems: "center",
          mt: { md: 0, xs: -5 },
          mb: 4,
          ml: { md: 0, xs: 3 },
        }}
      >
        <Custom_Button color="#D3000D" text="Abort"></Custom_Button>
        <Custom_Button color="#CC00D3" text="Accept"></Custom_Button>
      </Box>
    </>
  );
};
export default Renounce_Owner_Ship;
