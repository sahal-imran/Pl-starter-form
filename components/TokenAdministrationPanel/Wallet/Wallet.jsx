import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Custom_Button from "../../Buttons/button";
const Wallet = () => {
  // states
  const [Marketing_Wallet, Set_Marketing_Wallet] = useState("");
  const [Development_Wallet, Set_Development_Wallet] = useState("");
  const [Team_Wallet, Set_Team_Wallet] = useState("");

  // {Valadation states}
  const [Valid_Marketing_Wallet, Set_Valid_Marketing_Wallet] = useState(false);
  const [Valid_Development_Wallet, Set_Valid_Development_Wallet] =
    useState(false);
  const [Valid_Team_Wallet, Set_Valid_Team_Wallet] = useState(false);

  // {Fees tag valadation states}
  const [Wallet_Valadation, Set_Wallet_Valadation] = useState(false);
  function Wallet_Valadations() {
    if (
      Marketing_Wallet.length === 0 &&
      Development_Wallet.length === 0 &&
      Team_Wallet.length === 0
    ) {
      Set_Wallet_Valadation(true);
      return;
    }
    if (Marketing_Wallet.length === 0) {
      Set_Valid_Marketing_Wallet(true);
      return;
    }
    if (Development_Wallet.length === 0) {
      Set_Valid_Development_Wallet(true);
      return;
    }
    if (Team_Wallet.length === 0) {
      Set_Valid_Team_Wallet(true);
      return;
    }
  }
  // fees object
  const Wallet_Data = [
    {
      id: 1,
      title: "Marketing Wallet",
      placeholder: "Enter max buy",
      Current_State: Marketing_Wallet,
      GetChange: Set_Marketing_Wallet,
      Valadation: Valid_Marketing_Wallet,
      Set_Valadation: Set_Valid_Marketing_Wallet,
    },
    {
      id: 2,
      title: "Development Wallet",
      placeholder: "Enter max sell",
      Current_State: Development_Wallet,
      GetChange: Set_Development_Wallet,
      Valadation: Valid_Development_Wallet,
      Set_Valadation: Set_Valid_Development_Wallet,
    },
    {
      id: 3,
      title: "Team Wallet",
      placeholder: "Enter max wallet",
      Current_State: Team_Wallet,
      GetChange: Set_Team_Wallet,
      Valadation: Valid_Team_Wallet,
      Set_Valadation: Set_Valid_Team_Wallet,
    },
  ];
  const data = Wallet_Data.map((Inpt, index) => {
    return (
      <Box
        key={index}
        sx={{
          width: { md: "561px", xs: "100%" },
          weight: 500,
          fontSize: "19px",
          lineHeight: "23.88px",
          color: "#FFFFFF",
          fontFamily: ["Source Code Pro", "monospace"],
          fontStyle: "normal",
          mt: 5,
        }}
      >
        <Topography
          sx={{
            width: "100%",
            textTransform: "capitalize",
          }}
        >
          {Inpt.title}
        </Topography>
        <Box sx={{ width: "100%", height: "57px", mt: 1.6 }}>
          <input
            type="text"
            placeholder={Inpt.placeholder}
            value={Inpt.Current_State}
            onChange={(
              e,
              f = Inpt.GetChange,
              f2 = Inpt.Set_Valadation,
              f3 = Set_Wallet_Valadation
            ) => {
              f(e.target.value);
              f2(false);
              f3(false);
            }}
            style={{
              width: "100%",
              height: "100%",
              background: "#0F0335",
              borderRadius: "6px",
              border: "2px solid #FFFFFF",
              outline: "none",
              color: "white",
              fontSize: "18px",
              padding: "0px 20px",
            }}
          />
          {Inpt.Valadation ? (
            <Topography
              variant="h2"
              sx={{
                fontSize: "17px",
                color: "red",
                mt: 1.2,
                width: { md: "561px", xs: "100%" },
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              required *
            </Topography>
          ) : null}
        </Box>
      </Box>
    );
  });

  return (
    <>
      {data}
      {Wallet_Valadation ? (
        <Topography
          variant="h2"
          sx={{
            fontSize: "17px",
            color: "red",
            mt: 2,
            width: { md: "561px", xs: "100%" },

            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          Fill all the fields *
        </Topography>
      ) : null}
      <Box
        sx={
          Wallet_Valadation
            ? {
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
                justifyContent: "center",
                alignItems: "center",
                mt: 4.4,
                mb: 4,
                ml: { md: 0, xs: 3 },
              }
            : {
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
                justifyContent: "center",
                alignItems: "center",
                mt: 9,
                mb: 4,
                ml: { md: 0, xs: 3 },
              }
        }
      >
        <Custom_Button color="#D3000D" text="Abort"></Custom_Button>
        <Custom_Button
          color="#CC00D3"
          text="Accept"
          clicked={Wallet_Valadations}
        ></Custom_Button>
      </Box>
    </>
  );
};
export default Wallet;
