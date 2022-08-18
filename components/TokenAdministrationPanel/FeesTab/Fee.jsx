import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Custom_Button from "../../Buttons/button";

const Fees = () => {
  // states
  const [Liquidity, Set_Liquidity] = useState("");
  const [Burn_Fee, Set_Burn_Fee] = useState("");
  const [Reflection, Set_Reflection] = useState("");
  const [Marketing, Set_Marketing] = useState("");
  const [Reward, Set_Reward] = useState("");
  const [Development, Set_Development] = useState("");

  // {Valadation states}
  const [Valid_Liquidity, Set_Valid_Liquidity] = useState(false);
  const [Valid_Burn_Fee, Set_Valid_Burn_Fee] = useState(false);
  const [Valid_Reflection, Set_Valid_Reflection] = useState(false);
  const [Valid_Marketing, Set_Valid_Marketing] = useState(false);
  const [Valid_Reward, Set_Valid_Reward] = useState(false);
  const [Valid_Development, Set_Valid_Development] = useState(false);

  // {Fees tag valadation states}
  const [Fee_Valadation, Set_Fee_Valadation] = useState(false);
  function Fees_Valadation() {
    if (
      Liquidity.length === 0 &&
      Burn_Fee.length === 0 &&
      Reflection.length === 0 &&
      Marketing.length === 0 &&
      Reward.length === 0 &&
      Development.length === 0
    ) {
      Set_Fee_Valadation(true);
      return;
    }
    if (Liquidity.length === 0) {
      Set_Valid_Liquidity(true);
      return;
    }
    if (Burn_Fee.length === 0) {
      Set_Valid_Burn_Fee(true);
      return;
    }
    if (Reflection.length === 0) {
      Set_Valid_Reflection(true);
      return;
    }
    if (Marketing.length === 0) {
      Set_Valid_Marketing(true);
      return;
    }
    if (Reward.length === 0) {
      Set_Valid_Reward(true);
      return;
    }
    if (Development.length === 0) {
      Set_Valid_Development(true);
      return;
    }
  }
  // fees object
  const Fees_Data = [
    {
      id: 1,
      title: "Liquidity",
      placeholder: "Enter liquidity in %",
      Current_State: Liquidity,
      GetChange: Set_Liquidity,
      Valadation: Valid_Liquidity,
      Set_Valadation: Set_Valid_Liquidity,
    },
    {
      id: 2,
      title: "Burn",
      placeholder: "Enter burn fee in %",
      Current_State: Burn_Fee,
      GetChange: Set_Burn_Fee,
      Valadation: Valid_Burn_Fee,
      Set_Valadation: Set_Valid_Burn_Fee,
    },
    {
      id: 3,
      title: "Reflection",
      placeholder: "Enter reflection",
      Current_State: Reflection,
      GetChange: Set_Reflection,
      Valadation: Valid_Reflection,
      Set_Valadation: Set_Valid_Reflection,
    },
    {
      id: 4,
      title: "Marketing",
      placeholder: "Enter marketing",
      Current_State: Marketing,
      GetChange: Set_Marketing,
      Valadation: Valid_Marketing,
      Set_Valadation: Set_Valid_Marketing,
    },
    {
      id: 5,
      title: "Reward",
      placeholder: "Enter reward",
      Current_State: Reward,
      GetChange: Set_Reward,
      Valadation: Valid_Reward,
      Set_Valadation: Set_Valid_Reward,
    },
    {
      id: 6,
      title: "Development",
      placeholder: "Enter development",
      Current_State: Development,
      GetChange: Set_Development,
      Valadation: Valid_Development,
      Set_Valadation: Set_Valid_Development,
    },
  ];
  const data = Fees_Data.map((Inpt, index) => {
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
              f3 = Set_Fee_Valadation
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
      {Fee_Valadation ? (
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
          Fee_Valadation
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
          clicked={Fees_Valadation}
        ></Custom_Button>
      </Box>
    </>
  );
};
export default Fees;
