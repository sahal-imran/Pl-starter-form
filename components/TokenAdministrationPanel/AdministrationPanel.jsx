import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Fees from "./FeesTab/Fee";
import Transaction from "./Transaction/Transaction";
import Wallet from "./Wallet/Wallet";
import Renounce_Owner_Ship from "./RenounceOwnerShip/Renounce_Owner_Ship";
function Administration_Panel() {
  // states
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { md: "837px", xs: "100%" },
          borderRadius: "6px",
          background: "#0F0335",
          margin: "auto",
          py: 4,
          px: { md: "unset", xs: 2 },
        }}
      >
        <Topography
          sx={{
            variant: "h2",
            fontFamily: ["Source Code Pro", "monospace"],
            fontWeight: 600,
            fontSize: { md: "38px", xs: "24px" },
            lineHeight: { md: "47.77px", xs: "36px" },
            color: "#FFFFFF",
            textAlign: "center",
            mb: 2,
          }}
        >
          Token Administration Panel
        </Topography>
        <Topography
          sx={{
            variant: "h2",
            fontFamily: ["Source Code Pro", "monospace"],
            fontWeight: 500,
            fontSize: { md: "18px", xs: "16px" },
            lineHeight: "23.88px",
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
            mb: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit.
        </Topography>
        {/* Tabs */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            maxWidth: { md: 837, xs: 300 },
          }}
        >
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
            }}
          >
            <Tab
              sx={{
                color: "#FFFF",
                fontSize: { md: "24px", xs: "14px" },
                lineHeight: { md: "30.17px", xs: "20px" },
                fontWeight: 600,
                fontFamily: ["Source Code Pro", "monospace"],
                textTransform: "capitalize",
                mr: { md: 5, xs: 0 },
                maxWidth: "100px",
              }}
              label="Fees"
            />
            <Tab
              sx={{
                color: "#FFFF",
                fontSize: { md: "24px", xs: "14px" },
                lineHeight: { md: "30.17px", xs: "20px" },
                fontWeight: 600,
                fontFamily: ["Source Code Pro", "monospace"],
                textTransform: "capitalize",
                mr: { md: 5, xs: 0 },
                maxWidth: "150px",
              }}
              label="Transaction"
            />
            <Tab
              sx={{
                color: "#FFFF",
                fontSize: { md: "24px", xs: "14px" },
                lineHeight: { md: "30.17px", xs: "20px" },
                fontWeight: 600,
                fontFamily: ["Source Code Pro", "monospace"],
                textTransform: "capitalize",
                mr: { md: 5, xs: 0 },
                maxWidth: "100px",
              }}
              label="Wallets"
            />
            <Tab
              sx={{
                color: "#FFFF",
                fontSize: { md: "24px", xs: "14px" },
                lineHeight: { md: "30.17px", xs: "20px" },
                fontWeight: 600,
                fontFamily: ["Source Code Pro", "monospace"],
                textTransform: "capitalize",
                maxWidth: "290px",
              }}
              label="Renounce ownership"
            />
          </Tabs>
        </Box>
        {value === 0 ? <Fees></Fees> : null}
        {value === 1 ? <Transaction></Transaction> : null}
        {value === 2 ? <Wallet></Wallet> : null}
        {value === 3 ? <Renounce_Owner_Ship></Renounce_Owner_Ship> : null}
      </Box>
    </>
  );
}
export default Administration_Panel;
