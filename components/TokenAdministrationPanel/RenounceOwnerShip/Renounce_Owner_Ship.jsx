import React, { useState } from "react";
import Topography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Button } from "@mui/material";

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
        <Button
          sx={{
            display: "flex",
            p: "25px",
            width: { md: "149px", xs: "200px" },
            height: "50px",
            whiteSpace: "noWrap",
            backgroundColor: `#D3000D`,
            fontFamily: ["Source Code Pro", "monospace"],
            fontSize: "16px",
            lineHeight: "20.11px",
            textTransform: "capitalize",
            weight: 600,
            color: "white",
            mr: 3,
            mb: { md: 0, xs: 3 },
            "&:hover": {
              boxShadow: "none",
              background: `#D3000D`,
            },
            borderRadius: "unset",
          }}
        >
          Abort
        </Button>
        <Button
          sx={{
            display: "flex",
            p: "25px",
            width: { md: "149px", xs: "200px" },
            height: "50px",
            whiteSpace: "noWrap",
            backgroundColor: `#CC00D3`,
            fontFamily: ["Source Code Pro", "monospace"],
            fontSize: "16px",
            lineHeight: "20.11px",
            textTransform: "capitalize",
            weight: 600,
            color: "white",
            mr: 3,
            mb: { md: 0, xs: 3 },
            "&:hover": {
              boxShadow: "none",
              background: `#CC00D3`,
            },
            borderRadius: "unset",
          }}
        >
          Accept
        </Button>
      </Box>
    </>
  );
};
export default Renounce_Owner_Ship;
