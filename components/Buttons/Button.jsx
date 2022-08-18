import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import { Button } from "@mui/material";
const Custom_Button = ({ color, text, clicked }) => {
  return (
    <Button
      onClick={clicked}
      sx={{
        display: "flex",
        p: "25px",
        width: { md: "149px", xs: "200px" },
        height: "50px",
        whiteSpace: "noWrap",
        backgroundColor: `${color}`,
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
          background: `${color}`,
        },
        borderRadius: "unset",
      }}
    >
      {text}
    </Button>
  );
};
export default Custom_Button;
