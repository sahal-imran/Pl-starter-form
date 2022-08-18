import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Custom_Button from "../../Buttons/button";

const Transaction = () => {
  // states
  const [Max_Buy, Set_Max_Buy] = useState("");
  const [Max_Sell, Set_Max_Sell] = useState("");
  const [Wallet, Set_Wallet] = useState("");

  // {Valadation states}
  const [Valid_Max_Buy, Set_Valid_Max_Buy] = useState(false);
  const [Valid_Max_Sell, Set_Valid_Max_Sell] = useState(false);
  const [Valid_Wallet, Set_Valid_Wallet] = useState(false);

  // {Fees tag valadation states}
  const [Transaction_Valadation, Set_Transaction_Valadation] = useState(false);
  function Transactions_Valadation() {
    if (Max_Buy.length === 0 && Max_Sell.length === 0 && Wallet.length === 0) {
      Set_Transaction_Valadation(true);
      return;
    }
    if (Max_Buy.length === 0) {
      Set_Valid_Max_Buy(true);
      return;
    }
    if (Max_Sell.length === 0) {
      Set_Valid_Max_Sell(true);
      return;
    }
    if (Wallet.length === 0) {
      Set_Valid_Wallet(true);
      return;
    }
  }
  // fees object
  const Transaction_Data = [
    {
      id: 1,
      title: "Max Buy",
      placeholder: "Enter max buy",
      Current_State: Max_Buy,
      GetChange: Set_Max_Buy,
      Valadation: Valid_Max_Buy,
      Set_Valadation: Set_Valid_Max_Buy,
    },
    {
      id: 2,
      title: "Max Sell",
      placeholder: "Enter max sell",
      Current_State: Max_Sell,
      GetChange: Set_Max_Sell,
      Valadation: Valid_Max_Sell,
      Set_Valadation: Set_Valid_Max_Sell,
    },
    {
      id: 3,
      title: "Max Wallet",
      placeholder: "Enter max wallet",
      Current_State: Wallet,
      GetChange: Set_Wallet,
      Valadation: Valid_Wallet,
      Set_Valadation: Set_Valid_Wallet,
    },
  ];
  const data = Transaction_Data.map((Inpt, index) => {
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
            // onFocus={removeValadation(index)}
            type="text"
            placeholder={Inpt.placeholder}
            value={Inpt.Current_State}
            onChange={(
              e,
              f = Inpt.GetChange,
              f2 = Inpt.Set_Valadation,
              f3 = Set_Transaction_Valadation
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
      {Transaction_Valadation ? (
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
          Transaction_Valadation
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
          clicked={Transactions_Valadation}
        ></Custom_Button>
      </Box>
    </>
  );
};
export default Transaction;
