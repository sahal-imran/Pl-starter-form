import React, { useState } from "react";
import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Administration_Panel from "../TokenAdministrationPanel/AdministrationPanel";
// Assets
import forwardArrow from "../../public/assets/pictures/forwardArrow.svg";
import backArrow from "../../public/assets/pictures/backArrow.svg";

function Form() {
  // Views Management
  const [BascicTokenInformation, Set_BascicTokenInformation] = useState(true);
  const [Tokenomics, Set_Tokenomics] = useState(false);
  const [FeaturesSelection, Set_FeaturesSelection] = useState(false);

  //dropDown list state
  const [list_Item, setItem] = useState("none");
  const [list_Placeholder, set_list_Placeholder] = useState(
    list_Item === "none"
  );

  const selectItem = (e) => {
    setItem(e.target.value);
  };

  // states and object BascicTokenInformation
  const [Name, Set_Name] = useState("");
  const [Symbal, Set_Symbal] = useState("");
  const [Decimals, Set_Decimals] = useState("");
  const [Total_Supply, Set_Total_Supply] = useState("");
  const [Description, Set_Description] = useState("");
  const [Website, Set_Website] = useState("");
  const [Twitter, Set_Twitter] = useState("");
  const [Telegram, Set_Telegram] = useState("");

  const handleChange = (event) => {
    setTokenType(event.target.value);
    Set_All_Fields(false);
    Set_Valid_Token(false);
  };
  const Drop_Down_Items = [];
  // *************************drrop down list function********************
  const dropDown = () => {
    return (
      <>
        <Topography
          sx={{ width: "100%", textTransform: "capitalize", mt: 5, mb: -3.5 }}
        >
          Router
        </Topography>
        <Select
          labelId="drop-down-list-label"
          id="drop-down-item"
          value={list_Item}
          onChange={selectItem}
          onFocus={(e) => set_list_Placeholder(false)}
          onClose={(e) => set_list_Placeholder(e.target.value === undefined)}
          sx={
            list_Item === "none"
              ? {
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                  color: "rgba(255, 255, 255, 0.29)",
                  textTransform: "capitalize",
                  "& svg": { color: "white" },
                  fontFamily: ["Source Code Pro", "monospace"],
                  mt: 5,
                }
              : {
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                  color: "white",
                  "& svg": { color: "white" },
                  fontFamily: ["Source Code Pro", "monospace"],
                  mt: 5,
                }
          }
        >
          <MenuItem
            sx={!list_Placeholder ? { display: "none" } : null}
            key="0"
            disabled
            value="none"
          >
            drop down list
          </MenuItem>

          {Drop_Down_Items.map((item, index) => {
            return <MenuItem value={item.name}>{item.name}</MenuItem>;
          })}
        </Select>
      </>
    );
  };

  // state for placeHolder
  const [TokenType, setTokenType] = React.useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(TokenType === "none");
  const [ValidToken, Set_Valid_Token] = useState(false);

  // Valdations states of BasicTokenInformation
  const [ValidName, Set_Valid_Name] = useState(false);
  const [ValidSymbal, Set_Valid_Symbal] = useState(false);
  const [ValidDecimals, Set_Valid_Decimals] = useState(false);
  const [ValidTotalSupply, Set_Valid_Total_Supply] = useState(false);
  const [ValidDes, Set_Valid_Des] = useState(false);
  const [ValidWebsite, Set_Valid_Website] = useState(false);
  const [ValidTwitter, Set_Valid_Twitter] = useState(false);
  const [ValidTelegram, Set_Valid_Telegram] = useState(false);

  // state fill all the required fields
  const [All_Fields, Set_All_Fields] = useState(false);

  //Checking Valadation
  const Check_Valadation = (Clicked_Button) => {
    if (
      TokenType === "none" &&
      Name.length === 0 &&
      Symbal.length === 0 &&
      Decimals.length === 0 &&
      Total_Supply.length === 0
    ) {
      Set_All_Fields(true);
      return;
    }
    if (TokenType === "none") {
      Set_Valid_Token(true);
      return;
    }
    if (Name.length === 0 || !Name) {
      Set_Valid_Name(true);
      return;
    }
    if (Symbal.length === 0 || !Symbal) {
      Set_Valid_Symbal(true);
      return;
    }
    if (Decimals.length === 0 || !Decimals) {
      Set_Valid_Decimals(true);
      return;
    }
    if (Total_Supply.length === 0 || !Total_Supply) {
      Set_Valid_Total_Supply(true);
      return;
    }

    SwitchViews(Clicked_Button);
  };

  const InputFields = [
    {
      id: 1,
      title: "Name",
      placeholder: "Enter your token name",
      Current_State: Name,
      GetChange: Set_Name,
      Valdation: ValidName,
      Set_Valadation: Set_Valid_Name,
    },

    {
      id: 2,
      title: "Symbol",
      placeholder: "Enter your token symbol",
      Current_State: Symbal,
      GetChange: Set_Symbal,
      Valdation: ValidSymbal,
      Set_Valadation: Set_Valid_Symbal,
    },
    {
      id: 3,
      title: "Decimals",
      placeholder: "8-16",
      Current_State: Decimals,
      GetChange: Set_Decimals,
      Valdation: ValidDecimals,
      Set_Valadation: Set_Valid_Decimals,
    },
    {
      id: 4,
      title: "Total Supply",
      placeholder: "Enter total supply",
      Current_State: Total_Supply,
      GetChange: Set_Total_Supply,
      Valdation: ValidTotalSupply,
      Set_Valadation: Set_Valid_Total_Supply,
    },
    {
      id: 5,
      title: "Description(Optional)",
      placeholder: "Describe Your Token",
      Current_State: Description,
      GetChange: Set_Description,
      Valdation: ValidDes,
      Set_Valadation: Set_Valid_Des,
    },
    {
      id: 6,
      title: "website(optional)",
      placeholder: "Add website link",
      Current_State: Website,
      GetChange: Set_Website,
      Valdation: ValidWebsite,
      Set_Valadation: Set_Valid_Website,
    },
    {
      id: 7,
      title: "Twitter(optional)",
      placeholder: "Add Twitter link",
      Current_State: Twitter,
      GetChange: Set_Twitter,
      Valdation: ValidTwitter,
      Set_Valadation: Set_Valid_Twitter,
    },
    {
      id: 8,
      title: "Telegram(optional)",
      placeholder: "Add Telegram link",
      Current_State: Telegram,
      GetChange: Set_Telegram,
      Valdation: ValidTelegram,
      Set_Valadation: Set_Valid_Telegram,
    },
  ];

  // states and object Tokenomics
  const [Buy_Tax, Set_Buy_Tax] = useState("");
  const [Sell_Tax, Set_Sell_Tax] = useState("");
  const [Max_Sell_Transaction, Set_Max_Sell_Transaction] = useState("");
  const [Max_Buy_Transaction, Set_Max_Buy_Transaction] = useState("");
  const [Max_Wallet, Set_Max_Wallet] = useState("");
  const [Router, Set_Router] = useState("");
  const [Liquid_Fee, Set_Liquid_Fee] = useState("");
  const [Burn_Fee, Set_Burn_Fee] = useState("");
  const [Reflection, Set_Reflection] = useState("");
  const [Marketing_Fee, Set_Marketing_Fee] = useState("");
  const [Denominator_Fee, Set_Denominator_Fee] = useState("");
  const [Tax_Fee, Set_Tax_Fee] = useState("");
  const [Service_Fee_Receiver, Set_Service_Fee_Receiver] = useState("");
  const [Marketing_Wallet, Set_Marketing_Wallet] = useState("");
  const [Reward_Fee, Set_Reward_Fee] = useState("");
  const [Reward_Address, Set_Reward_Address] = useState("");

  // Valdations states of Tokenomics

  // ***********************************************************************************
  const [Valid_Buy_Tax, Set_Valid_Buy_Tax] = useState(false);
  const [Valid_Sell_Tax, Set_Valid_Sell_Tax] = useState(false);
  const [Valid_Max_Sell_Transaction, Set_Valid_Max_Sell_Transaction] =
    useState(false);
  const [Valid_Max_Buy_Transaction, Set_Valid_Max_Buy_Transaction] =
    useState(false);
  const [Valid_Router, Set_Valid_Router] = useState(false);
  const [Valid_Burn_Fee, Set_Valid_Burn_Fee] = useState(false);
  const [Valid_Reflection, Set_Valid_Reflection] = useState(false);
  const [Valid_Liquid_Fee, Set_Valid_Liquid_Fee] = useState(false);
  const [Valid_Marketing_Fee, Set_Valid_Marketing_Fee] = useState(false);
  const [Valid_Denominator_Fee, Set_Valid_Denominator_Fee] = useState(false);
  const [Valid_Max_Wallet, Set_Valid_Max_Wallet] = useState(false);
  const [Valid_Tax_Fee, Set_Valid_Tax_Fee] = useState("");
  const [Valid_Service_Fee_Receiver, Set_Valid_Service_Fee_Receiver] =
    useState("");
  const [Valid_Marketing_Wallet, Set_Valid_Marketing_Wallet] = useState("");
  const [Valid_Reward_Fee, Set_Valid_Reward_Fee] = useState("");
  const [Valid_Reward_Address, Set_Valid_Reward_Address] = useState("");

  // ************************************************************************************
  const Tokenomics_Standard_InputFields = [
    {
      id: 1,
      title: "Buy Tax",
      placeholder: "Enter buy tax in %",
      Current_State: Buy_Tax,
      GetChange: Set_Buy_Tax,
      valadation: Valid_Buy_Tax,
      Set_Valadation: Set_Valid_Buy_Tax,
    },
    {
      id: 2,
      title: "Sell Tax",
      placeholder: "Enter sell tax in %",
      Current_State: Sell_Tax,
      GetChange: Set_Sell_Tax,
      valadation: Valid_Sell_Tax,
      Set_Valadation: Set_Valid_Sell_Tax,
    },
    {
      id: 3,
      title: "Service Fee Reciever",
      placeholder: "Enter wallet address",
      Current_State: Service_Fee_Receiver,
      GetChange: Set_Service_Fee_Receiver,
      valadation: Valid_Service_Fee_Receiver,
      Set_Valadation: Set_Valid_Service_Fee_Receiver,
    },
    {
      id: 4,
      title: "Max Sell Transaction",
      placeholder: "Enter max sell tx in % of total supply",
      Current_State: Max_Sell_Transaction,
      GetChange: Set_Max_Sell_Transaction,
      valadation: Valid_Max_Sell_Transaction,
      Set_Valadation: Set_Valid_Max_Sell_Transaction,
    },
    {
      id: 5,
      title: "Max Buy Transaction",
      placeholder: "Enter buy sell tx in % of total supply",
      Current_State: Max_Buy_Transaction,
      GetChange: Set_Max_Buy_Transaction,
      valadation: Valid_Max_Buy_Transaction,
      Set_Valadation: Set_Valid_Max_Buy_Transaction,
    },
    {
      id: 6,
      title: "Max Wallet",
      placeholder: "Enter Max Wallet tx in % of total supply",
      Current_State: Max_Wallet,
      GetChange: Set_Max_Wallet,
      valadation: Valid_Max_Wallet,
      Set_Valadation: Set_Valid_Max_Wallet,
    },
  ];
  const Tokenomics_Deflation_InputFields = [
    {
      id: 1,
      title: "Buy Tax",
      placeholder: "Enter buy tax in %",
      Current_State: Buy_Tax,
      GetChange: Set_Buy_Tax,
      valadation: Valid_Buy_Tax,
      Set_Valadation: Set_Valid_Buy_Tax,
    },
    {
      id: 2,
      title: "Sell Tax",
      placeholder: "Enter sell tax in %",
      Current_State: Sell_Tax,
      GetChange: Set_Sell_Tax,
      valadation: Valid_Sell_Tax,
      Set_Valadation: Set_Valid_Sell_Tax,
    },
    // {
    //   id: 3,
    //   title: "Service Fee Reciever",
    //   placeholder: "Enter Wallet Address",
    //   Current_State: Router,
    //   GetChange: Set_Router,
    //   valadation: Valid_Router,
    //   Set_Valadation: Set_Valid_Router,
    // },
    {
      id: 3,
      title: "Liquidity Fee ",
      placeholder: "Enter liquidity fee in %",
      Current_State: Liquid_Fee,
      GetChange: Set_Liquid_Fee,
      valadation: Valid_Liquid_Fee,
      Set_Valadation: Set_Valid_Liquid_Fee,
    },
    {
      id: 4,
      title: "Burn Fee",
      placeholder: "Enter burn fee in %",
      Current_State: Burn_Fee,
      GetChange: Set_Burn_Fee,
      valadation: Valid_Burn_Fee,
      Set_Valadation: Set_Valid_Burn_Fee,
    },
    {
      id: 5,
      title: "Reflection Fee",
      placeholder: "Enter Reflection fee in %",
      Current_State: Reflection,
      GetChange: Set_Reflection,
      valadation: Valid_Reflection,
      Set_Valadation: Set_Valid_Reflection,
    },
    {
      id: 6,
      title: "Marketing Fee",
      placeholder: "Enter Marketing fee in %",
      Current_State: Marketing_Fee,
      GetChange: Set_Marketing_Fee,
      valadation: Valid_Marketing_Fee,
      Set_Valadation: Set_Valid_Marketing_Fee,
    },
    {
      id: 7,
      title: "Denominator Fee",
      placeholder: "Enter Denominator fee in %",
      Current_State: Denominator_Fee,
      GetChange: Set_Denominator_Fee,
      valadation: Valid_Denominator_Fee,
      Set_Valadation: Set_Valid_Denominator_Fee,
    },
    {
      id: 8,
      title: "Marketing Wallet",
      placeholder: "Enter marketing wallet",
      Current_State: Marketing_Wallet,
      GetChange: Set_Marketing_Wallet,
      valadation: Valid_Marketing_Wallet,
      Set_Valadation: Set_Valid_Marketing_Wallet,
    },
    {
      id: 9,
      title: "Max Sell Transaction",
      placeholder: "Enter Max sell tx in % of total Supply",
      Current_State: Max_Sell_Transaction,
      GetChange: Set_Max_Sell_Transaction,
      valadation: Valid_Max_Sell_Transaction,
      Set_Valadation: Set_Valid_Max_Sell_Transaction,
    },
    {
      id: 10,
      title: "Max Buy Transaction",
      placeholder: "Enter buy sell tx in % of total Supply",
      Current_State: Max_Buy_Transaction,
      GetChange: Set_Max_Buy_Transaction,
      valadation: Valid_Max_Buy_Transaction,
      Set_Valadation: Set_Valid_Max_Buy_Transaction,
    },
    {
      id: 11,
      title: "Max Wallet",
      placeholder: "Enter Max Wallet tx in % of total Supply",
      Current_State: Max_Wallet,
      GetChange: Set_Max_Wallet,
      valadation: Valid_Max_Wallet,
      Set_Valadation: Set_Valid_Max_Wallet,
    },
  ];
  const Tokenomics_LP_InputFields = [
    {
      id: 1,
      title: "Buy Tax",
      placeholder: "Enter Buy tax in %",
      Current_State: Buy_Tax,
      GetChange: Set_Buy_Tax,
      valadation: Valid_Buy_Tax,
      Set_Valadation: Set_Valid_Buy_Tax,
    },
    {
      id: 2,
      title: "Sell Tax",
      placeholder: "Enter Sell tax in %",
      Current_State: Sell_Tax,
      GetChange: Set_Sell_Tax,
      valadation: Valid_Sell_Tax,
      Set_Valadation: Set_Valid_Sell_Tax,
    },
    // {
    //   id: 3,
    //   title: "Service Fee Reciever",
    //   placeholder: "Enter Wallet Address",
    //   Current_State: Router,
    //   GetChange: Set_Router,
    //   valadation: Valid_Router,
    //   Set_Valadation: Set_Valid_Router,
    // },

    {
      id: 3,
      title: "Liquid Fee",
      placeholder: "Enter liquid fee",
      Current_State: Liquid_Fee,
      GetChange: Set_Liquid_Fee,
      valadation: Valid_Liquid_Fee,
      Set_Valadation: Set_Valid_Liquid_Fee,
    },
    {
      id: 4,
      title: "Tax Fee",
      placeholder: "Enter Fees",
      Current_State: Tax_Fee,
      GetChange: Set_Tax_Fee,
      valadation: Valid_Tax_Fee,
      Set_Valadation: Set_Valid_Tax_Fee,
    },
    {
      id: 5,
      title: "Max Sell Transaction",
      placeholder: "Enter Max sell tx in % of total Supply",
      Current_State: Max_Sell_Transaction,
      GetChange: Set_Max_Sell_Transaction,
      valadation: Valid_Max_Sell_Transaction,
      Set_Valadation: Set_Valid_Max_Sell_Transaction,
    },
    {
      id: 6,
      title: "Max Buy Transaction",
      placeholder: "Enter buy sell tx in % of total Supply",
      Current_State: Max_Buy_Transaction,
      GetChange: Set_Max_Buy_Transaction,
      valadation: Valid_Max_Buy_Transaction,
      Set_Valadation: Set_Valid_Max_Buy_Transaction,
    },
    {
      id: 7,
      title: "Max Wallet",
      placeholder: "Enter Max Wallet tx in % of total Supply",
      Current_State: Max_Wallet,
      GetChange: Set_Max_Wallet,
      valadation: Valid_Max_Wallet,
      Set_Valadation: Set_Valid_Max_Wallet,
    },
  ];
  const Tokenomics_Reward_InputFields = [
    {
      id: 1,
      title: "Buy Tax",
      placeholder: "Enter buy tax in %",
      Current_State: Buy_Tax,
      GetChange: Set_Buy_Tax,
      valadation: Valid_Buy_Tax,
      Set_Valadation: Set_Valid_Buy_Tax,
    },
    {
      id: 2,
      title: "Sell Tax",
      placeholder: "Enter Sell tax in %",
      Current_State: Sell_Tax,
      GetChange: Set_Sell_Tax,
      valadation: Valid_Sell_Tax,
      Set_Valadation: Set_Valid_Sell_Tax,
    },
    // {
    //   id: 3,
    //   title: "Service Fee Reciever",
    //   placeholder: "Enter Wallet Address",
    //   Current_State: Router,
    //   GetChange: Set_Router,
    //   valadation: Valid_Router,
    //   Set_Valadation: Set_Valid_Router,
    // },
    {
      id: 3,
      title: "Liquidity Fee ",
      placeholder: "Enter liquidity fee in %",
      Current_State: Liquid_Fee,
      GetChange: Set_Liquid_Fee,
      valadation: Valid_Liquid_Fee,
      Set_Valadation: Set_Valid_Liquid_Fee,
    },
    {
      id: 4,
      title: "Rewards Fee ",
      placeholder: "Enter Rewards fee in %",
      Current_State: Reward_Fee,
      GetChange: Set_Reward_Fee,
      valadation: Valid_Reward_Fee,
      Set_Valadation: Set_Valid_Reward_Fee,
    },
    {
      id: 5,
      title: "Marketing Fer",
      placeholder: "Enter Marketing fee in %",
      Current_State: Marketing_Fee,
      GetChange: Set_Marketing_Fee,
      valadation: Valid_Marketing_Fee,
      Set_Valadation: Set_Valid_Marketing_Fee,
    },

    {
      id: 7,
      title: "Service Fee Reciever",
      placeholder: "Enter Wallet address",
      Current_State: Service_Fee_Receiver,
      GetChange: Set_Service_Fee_Receiver,
      valadation: Valid_Service_Fee_Receiver,
      Set_Valadation: Set_Valid_Service_Fee_Receiver,
    },
    {
      id: 8,
      title: "Reward Address",
      placeholder: "Enter CA of reward Token",
      Current_State: Reward_Address,
      GetChange: Set_Reward_Address,
      valadation: Valid_Reward_Address,
      Set_Valadation: Set_Valid_Reward_Address,
    },
    {
      id: 9,
      title: "Marketing Wallet",
      placeholder: "Enter Marketing wallet",
      Current_State: Marketing_Wallet,
      GetChange: Set_Marketing_Wallet,
      valadation: Valid_Marketing_Wallet,
      Set_Valadation: Set_Valid_Marketing_Wallet,
    },
    {
      id: 7,
      title: "Max Sell Transaction",
      placeholder: "Enter Max Sell tx in % of total Supply",
      Current_State: Max_Sell_Transaction,
      GetChange: Set_Max_Sell_Transaction,
      valadation: Valid_Max_Sell_Transaction,
      Set_Valadation: Set_Valid_Max_Sell_Transaction,
    },
    {
      id: 8,
      title: "Max Buy Transaction",
      placeholder: "Enter buy Sell tx in % of total Supply",
      Current_State: Max_Buy_Transaction,
      GetChange: Set_Max_Buy_Transaction,
      valadation: Valid_Max_Buy_Transaction,
      Set_Valadation: Set_Valid_Max_Buy_Transaction,
    },
    {
      id: 9,
      title: "Max Wallet",
      placeholder: "Enter Max Wallet tx in % of total Supply",
      Current_State: Max_Wallet,
      GetChange: Set_Max_Wallet,
      valadation: Valid_Max_Wallet,
      Set_Valadation: Set_Valid_Max_Wallet,
    },
  ];

  const Check_Selected_Token = () => {
    if (TokenType === "Standard Token") {
      return Tokenomics_Standard_InputFields;
    }
    if (TokenType === "Deflation Token") {
      return Tokenomics_Deflation_InputFields;
    }
    if (TokenType === "LP Token") {
      return Tokenomics_LP_InputFields;
    }
    if (TokenType === "Reward Token") {
      return Tokenomics_Reward_InputFields;
    }
  };

  const [Tokenomic_All_Fields, Set_Tokenoics_All_Fields] = useState(false);
  //  Valadation of Tokenomics
  const Tokenomics_Valadation = (Clicked_Button) => {
    if (TokenType === "Standard Token") {
      if (
        Buy_Tax.length === 0 &&
        Sell_Tax.length === 0 &&
        Service_Fee_Receiver.length === 0 &&
        Max_Sell_Transaction.length === 0 &&
        Max_Buy_Transaction.length === 0 &&
        Max_Wallet.length === 0
      ) {
        Set_Tokenoics_All_Fields(true);
        return;
      }
      if (Buy_Tax.length === 0) {
        Set_Valid_Buy_Tax(true);
        return;
      }
      if (Sell_Tax.length === 0) {
        Set_Valid_Sell_Tax(true);
        return;
      }
      if (Service_Fee_Receiver.length === 0) {
        Set_Valid_Service_Fee_Receiver(true);
        return;
      }
      if (Max_Sell_Transaction.length === 0) {
        Set_Valid_Max_Sell_Transaction(true);
        return;
      }
      if (Max_Buy_Transaction.length === 0) {
        Set_Valid_Max_Buy_Transaction(true);
        return;
      }
      if (Max_Wallet.length === 0) {
        Set_Valid_Max_Wallet(true);
        return;
      }
      SwitchViews(Clicked_Button);
    }
    if (TokenType === "Deflation Token") {
      if (
        Buy_Tax.length === 0 &&
        Sell_Tax.length === 0 &&
        Liquid_Fee.length === 0 &&
        Burn_Fee.length === 0 &&
        Reflection.length == 0 &&
        Reward_Fee.length === 0 &&
        Marketing_Fee.length === 0 &&
        Denominator_Fee.length === 0 &&
        Marketing_Wallet.length === 0 &&
        Max_Sell_Transaction.length === 0 &&
        Max_Buy_Transaction.length === 0 &&
        Max_Wallet.length === 0
      ) {
        Set_Tokenoics_All_Fields(true);
        return;
      }
      if (Buy_Tax.length === 0) {
        Set_Valid_Buy_Tax(true);
        return;
      }
      if (Sell_Tax.length === 0) {
        Set_Valid_Sell_Tax(true);
        return;
      }
      if (Liquid_Fee.length === 0) {
        Set_Valid_Liquid_Fee(true);
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
      if (Marketing_Fee.length === 0) {
        Set_Valid_Marketing_Fee(true);
        return;
      }
      if (Denominator_Fee.length === 0) {
        Set_Valid_Denominator_Fee(true);
        return;
      }
      if (Marketing_Wallet.length === 0) {
        Set_Valid_Marketing_Wallet(true);
        return;
      }
      if (Max_Sell_Transaction.length === 0) {
        Set_Valid_Max_Sell_Transaction(true);
        return;
      }
      if (Max_Buy_Transaction.length === 0) {
        Set_Valid_Max_Buy_Transaction(true);
        return;
      }
      if (Max_Wallet.length === 0) {
        Set_Valid_Max_Wallet(true);
        return;
      }
      SwitchViews(Clicked_Button);
    }
    if (TokenType === "LP Token") {
      if (
        Buy_Tax.length === 0 &&
        Sell_Tax.length === 0 &&
        Liquid_Fee.length === 0 &&
        Tax_Fee.length === 0 &&
        Max_Sell_Transaction.length === 0 &&
        Max_Buy_Transaction.length === 0 &&
        Max_Wallet.length === 0
      ) {
        Set_Tokenoics_All_Fields(true);
        return;
      }
      if (Buy_Tax.length === 0) {
        Set_Valid_Buy_Tax(true);
        return;
      }
      if (Sell_Tax.length === 0) {
        Set_Valid_Sell_Tax(true);
        return;
      }
      if (Liquid_Fee.length === 0) {
        Set_Valid_Liquid_Fee(true);
        return;
      }
      if (Tax_Fee.length === 0) {
        Set_Valid_Tax_Fee(true);
        return;
      }
      if (Max_Sell_Transaction.length === 0) {
        Set_Valid_Max_Sell_Transaction(true);
        return;
      }
      if (Max_Buy_Transaction.length === 0) {
        Set_Valid_Max_Buy_Transaction(true);
        return;
      }
      if (Max_Wallet.length === 0) {
        Set_Valid_Max_Wallet(true);
        return;
      }
      SwitchViews(Clicked_Button);
    }
    if (TokenType === "Reward Token") {
      if (
        Buy_Tax.length === 0 &&
        Sell_Tax.length === 0 &&
        Liquid_Fee.length === 0 &&
        Reward_Fee.length === 0 &&
        Marketing_Fee.length === 0 &&
        Service_Fee_Receiver.length === 0 &&
        Reward_Address.length === 0 &&
        Marketing_Wallet.length === 0 &&
        Max_Sell_Transaction.length === 0 &&
        Max_Buy_Transaction.length === 0 &&
        Max_Wallet.length === 0
      ) {
        Set_Tokenoics_All_Fields(true);
        return;
      }
      if (Buy_Tax.length === 0) {
        Set_Valid_Buy_Tax(true);
        return;
      }
      if (Sell_Tax.length === 0) {
        Set_Valid_Sell_Tax(true);
        return;
      }
      if (Liquid_Fee.length === 0) {
        Set_Valid_Liquid_Fee(true);
        return;
      }
      if (Reward_Fee.length === 0) {
        Set_Valid_Reward_Fee(true);
        return;
      }
      if (Marketing_Fee.length === 0) {
        Set_Valid_Marketing_Fee(true);
        return;
      }
      if (Service_Fee_Receiver.length === 0) {
        Set_Valid_Service_Fee_Receiver(true);
        return;
      }
      if (Reward_Address.length === 0) {
        Set_Valid_Reward_Address(true);
      }
      if (Marketing_Wallet.length === 0) {
        Set_Valid_Marketing_Wallet(true);
        return;
      }
      if (Max_Sell_Transaction.length === 0) {
        Set_Valid_Max_Sell_Transaction(true);
        return;
      }
      if (Max_Buy_Transaction.length === 0) {
        Set_Valid_Max_Buy_Transaction(true);
        return;
      }
      if (Max_Wallet.length === 0) {
        Set_Valid_Max_Wallet(true);
        return;
      }
      SwitchViews(Clicked_Button);
    }
  };

  // ************************************function handling forward button ************************************************
  const SwitchViews = (Click_View) => {
    Set_BascicTokenInformation(false);
    Set_Tokenomics(false);
    Set_FeaturesSelection(false);
    switch (Click_View) {
      case "BascicTokenInformation":
        Set_Tokenomics(true);
        break;
      case "Tokenomics":
        Set_FeaturesSelection(true);
        break;
      default:
        break;
    }
  };
  // ************************************function handling forward button ************************************************
  const SwitchViewsBack = (Click_View) => {
    Set_BascicTokenInformation(false);
    Set_Tokenomics(false);
    Set_FeaturesSelection(false);
    switch (Click_View) {
      case "Tokenomics":
        Set_BascicTokenInformation(true);
        break;
      case "FeaturesSelection":
        Set_Tokenomics(true);
        break;
      default:
        break;
    }
  };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [Btn1, Set_Btn1] = useState(false);
  const [Btn2, Set_Btn2] = useState(false);

  // ***********************************************************************
  const Toggle_Button_View = (Btn_Name) => {
    console.log(Btn_Name);
    Set_Btn1(false);
    Set_Btn2(false);
    Set_FeaturesSelection(false);
    switch (Btn_Name) {
      case 1:
        Set_Btn1(true);
        break;
      case 2:
        Set_Btn2(true);
        break;

      default:
        break;
    }
  };

  const BTNData = [
    {
      BtnTitle: "Token Administration panel ",
      BtnDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      BtnNo: 1,
      BtnState: Btn1,
    },
    {
      BtnTitle: "NFT Marketplace Contract  ",
      BtnDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      BtnNo: 2,
      BtnState: Btn2,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#1F0D59",
          boxSizing: "border-box",
          py: 4,
          px: { md: "unset", xs: 3 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* BasicTokenInformation */}

        {BascicTokenInformation && (
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
            {/* text 1 */}
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
              Basic Token Information
            </Topography>
            {/* text2 */}
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

            {/* Input fields */}
            <Box sx={{ width: { md: "561px", xs: "100%" } }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Topography
                  sx={{ textTransform: "capitalize", color: "white" }}
                >
                  Token Type
                </Topography>
                <Box
                  sx={{
                    mt: 1.6,
                    width: "100%",
                    height: "57px",
                    border: "2px solid white",
                    borderRadius: "6px",
                  }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={TokenType}
                    onChange={handleChange}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    sx={
                      TokenType === "none"
                        ? {
                            fontSize: "18px",
                            lineHeight: "22.63px",
                            borderRadius: "6px",
                            fontFamily: ["Source Code Pro", "monospace"],
                            ouline: "none",
                            border: "none",
                            width: "100%",
                            height: "100%",
                            color: "rgba(255, 255, 255, 0.29)",
                            textTransform: "capitalize",
                            "& svg": { color: "white" },
                          }
                        : {
                            fontSize: "18px",
                            lineHeight: "22.63px",
                            borderRadius: "6px",
                            fontFamily: ["Source Code Pro", "monospace"],
                            ouline: "none",
                            border: "none",
                            width: "100%",
                            height: "100%",
                            color: "white",
                            "& svg": { color: "white" },
                          }
                    }
                  >
                    <MenuItem
                      sx={!showPlaceholder ? { display: "none" } : null}
                      key="0"
                      disabled
                      value="none"
                    >
                      Select token type
                    </MenuItem>
                    <MenuItem value={"Standard Token"}>Standard Token</MenuItem>
                    <MenuItem value={"Deflation Token"}>
                      Deflation Token
                    </MenuItem>
                    <MenuItem value={"LP Token"}>LP Token</MenuItem>
                    <MenuItem value={"Reward Token"}>Reward Token</MenuItem>
                  </Select>
                  {ValidToken ? (
                    <Topography
                      variant="h2"
                      sx={{ fontSize: "17px", color: "red", mt: 1 }}
                    >
                      Required *
                    </Topography>
                  ) : null}
                </Box>
              </Box>
              {InputFields.map((Inpt, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
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
                      sx={{ width: "100%", textTransform: "capitalize" }}
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
                          f2 = Inpt.Set_Valadation
                        ) => {
                          f(e.target.value);
                          f2(false);
                          Set_Tokenoics_All_Fields(false);
                          Set_All_Fields(false);
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
                    </Box>
                    {Inpt.Valdation ? (
                      <Topography
                        variant="h2"
                        sx={{ fontSize: "17px", color: "red", mt: 1 }}
                      >
                        Required *
                      </Topography>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            {All_Fields && (
              <Topography
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  ml: { md: 36, xs: 0 },
                  fontSize: "16px",
                  color: "red",
                  mt: 2,
                  letterSpacing: "1px",
                }}
              >
                Fill all the required fields
              </Topography>
            )}
            {/* Button */}
            <Button
              onClick={() => Check_Valadation("BascicTokenInformation")}
              sx={
                All_Fields
                  ? {
                      display: "flex",
                      gap: "20px",
                      p: "25px",
                      width: { md: "181px", xs: "200px" },
                      height: "50px",
                      background: "#CC00D3",
                      fontFamily: ["Source Code Pro", "monospace"],
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "capitalize",
                      weight: 600,
                      color: "white",
                      "&:hover": {
                        boxShadow: "none",
                        background: "#CC00D3",
                      },
                      borderRadius: "unset",
                      mt: 2,
                    }
                  : {
                      display: "flex",
                      gap: "20px",
                      p: "25px",
                      width: { md: "181px", xs: "200px" },
                      height: "50px",
                      mt: 7,
                      background: "#CC00D3",
                      fontFamily: ["Source Code Pro", "monospace"],
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "capitalize",
                      weight: 600,
                      color: "white",
                      "&:hover": {
                        boxShadow: "none",
                        background: "#CC00D3",
                      },
                      mt: 7,
                      borderRadius: "unset",
                    }
              }
            >
              Continue
              <Image
                src={forwardArrow}
                width={16}
                height={16}
                objectFit="contain"
              ></Image>
            </Button>
          </Box>
        )}

        {/* Tokenomics */}

        {Tokenomics && (
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
            {/* Text1 */}

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
              Set up your Tokenomics
            </Topography>
            {/* Text2 */}
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
            {/* InputField */}
            <Box sx={{ width: { md: "561px", xs: "100%" } }}>
              {Check_Selected_Token().map((Inpt, index) => {
                return (
                  <Box
                    key={index}
                    sx={
                      index === 0
                        ? {
                            width: "100%",
                            weight: 500,
                            fontSize: "19px",
                            lineHeight: "23.88px",
                            color: "#FFFFFF",
                            fontFamily: ["Source Code Pro", "monospace"],
                            fontStyle: "normal",
                          }
                        : {
                            width: "100%",
                            weight: 500,
                            fontSize: "19px",
                            lineHeight: "23.88px",
                            color: "#FFFFFF",
                            fontFamily: ["Source Code Pro", "monospace"],
                            fontStyle: "normal",
                            mt: 5,
                          }
                    }
                  >
                    <Topography
                      sx={{ width: "100%", textTransform: "capitalize" }}
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
                          f2 = Inpt.Set_Valadation
                        ) => {
                          f(e.target.value);
                          f2(false);
                          Set_Tokenoics_All_Fields(false);
                          Set_All_Fields(false);
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
                      {Inpt.valadation ? (
                        <Topography
                          variant="h2"
                          sx={{ fontSize: "17px", color: "red", mt: 1 }}
                        >
                          Required *
                        </Topography>
                      ) : null}
                    </Box>
                    {Inpt.id === 3 && dropDown()}
                  </Box>
                );
              })}
            </Box>
            {Tokenomic_All_Fields && (
              <Topography
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  ml: { md: 36, xs: 0 },
                  fontSize: "16px",
                  color: "red",
                  mt: 2,
                  letterSpacing: "1px",
                }}
              >
                Fill all the required fields
              </Topography>
            )}
            {/* Buttons */}
            <Box
              sx={
                Tokenomic_All_Fields
                  ? {
                      width: { md: "561px", xs: "100%" },
                      display: "flex",
                      flexDirection: { md: "row", xs: "column-reverse" },
                      justifyContent: { md: "space-between", xs: "center" },
                      alignItems: "center",
                      mt: 2,
                    }
                  : {
                      width: { md: "561px", xs: "100%" },
                      display: "flex",
                      flexDirection: { md: "row", xs: "column-reverse" },
                      justifyContent: { md: "space-between", xs: "center" },
                      alignItems: "center",
                      mt: 7,
                    }
              }
            >
              {/* Backward Button */}
              <Button
                onClick={() => SwitchViewsBack("Tokenomics")}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "25px",
                  width: { md: "157px", xs: "200px" },
                  height: "50px",
                  background: "none",
                  fontFamily: ["Source Code Pro", "monospace"],
                  fontSize: "16px",
                  lineHeight: "20px",
                  textTransform: "capitalize",
                  weight: 600,
                  color: "#FFFFFF",
                  "&:hover": {
                    background: "none",
                  },
                  border: "1px solid #FFFFFF",
                  mt: { md: 0, xs: 2 },
                  borderRadius: "unset",
                }}
              >
                <Image
                  src={backArrow}
                  width={16}
                  height={16}
                  objectFit="contain"
                />
                <Box component={"span"} sx={{ ml: 2 }}>
                  Back
                </Box>
              </Button>
              {/* Forward Button */}
              <Button
                onClick={() => Tokenomics_Valadation("Tokenomics")}
                sx={{
                  display: "flex",
                  gap: "20px",
                  p: "25px",
                  width: { md: "181px", xs: "200px" },
                  height: "50px",
                  background: "#CC00D3",
                  fontFamily: ["Source Code Pro", "monospace"],
                  fontSize: "16px",
                  lineHeight: "20px",
                  textTransform: "capitalize",
                  weight: 600,
                  color: "white",
                  "&:hover": {
                    boxShadow: "none",
                    background: "#CC00D3",
                  },
                  borderRadius: "unset",
                }}
              >
                Continue
                <Image
                  src={forwardArrow}
                  width={16}
                  height={16}
                  objectFit="contain"
                ></Image>
              </Button>
            </Box>
          </Box>
        )}

        {/* Features Portion */}
        {FeaturesSelection && (
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
            {/* Text1 */}
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
              Select Features for your Coins
            </Topography>
            {/* Text2 */}
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
            {/* Map function on BTNData */}
            {BTNData.map((item, index) => {
              return (
                <Button
                  onClick={() => Toggle_Button_View(item.BtnNo)}
                  variant="outlined"
                  key={index}
                  sx={
                    index === 0
                      ? {
                          width: { md: "701px", xs: "100%" },
                          display: "flex",
                          flexDirection: { md: "row", xs: "column" },
                          p: { md: "unset", xs: 4 },
                          minHeight: "151px",
                          border: "2px solid white",
                          display: "flex",
                          gap: { md: "38px", xs: "25px" },
                          "&:hover": {
                            border: "2px solid white",
                          },
                        }
                      : {
                          mt: 5,
                          width: { md: "701px", xs: "100%" },
                          display: "flex",
                          flexDirection: { md: "row", xs: "column" },
                          p: { md: "unset", xs: 4 },
                          minHeight: "151px",
                          border: "2px solid white",
                          display: "flex",
                          gap: { md: "38px", xs: "25px" },
                          "&:hover": {
                            border: "2px solid white",
                          },
                        }
                  }
                >
                  {/* Left div */}
                  <div
                    style={{
                      width: "94px",
                      height: "94px",
                    }}
                  >
                    <Topography
                      sx={{
                        width: "100%",
                        height: "100%",
                        color: "#0F0335",
                        weight: 600,
                        fontSize: "46px",
                        lineHeight: "57.82px",
                        background: "white",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.BtnNo}
                    </Topography>
                  </div>
                  {/*right div  */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      // alignItems: "flex-start",
                      // alignItems: { md: "center", xs: "center" },
                      width: "75%",
                    }}
                  >
                    <Topography
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: { md: "flex-start", xs: "center" },
                        alignItems: "center",

                        fontSize: "24px",
                        weight: 600,
                        color: "#FFFFFF",
                        lineHeight: "30px",
                        textTransform: "capitalize",
                        fontFamily: ["Source Code Pro", "monospace"],
                      }}
                    >
                      {item.BtnTitle}
                    </Topography>
                    <Topography
                      sx={{
                        fonSize: "16px",
                        weight: 500,
                        color: "#FFFFFF",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontFamily: ["Source Code Pro", "monospace"],
                        textAlign: { md: "left", xs: "center" },
                      }}
                    >
                      {item.BtnDes}
                    </Topography>
                  </div>
                </Button>
              );
            })}
            {/* Buttons */}
            <Box
              sx={{
                width: { md: "701px", xs: "100%" },
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "space-between", xs: "center" },
                flexDirection: { md: "row", xs: "column-reverse" },
                mt: 7,
              }}
            >
              {/* Backward Button */}
              <Button
                onClick={() => SwitchViewsBack("FeaturesSelection")}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "25px",
                  width: { md: "157px", xs: "200px" },
                  height: "50px",
                  background: "none",
                  fontFamily: ["Source Code Pro", "monospace"],
                  fontSize: "16px",
                  lineHeight: "20px",
                  textTransform: "capitalize",
                  weight: 600,
                  color: "#FFFFFF",
                  "&:hover": {
                    background: "none",
                  },
                  borderRadius: "unset",
                  border: "1px solid #FFFFFF",
                  mt: { md: 0, xs: 2 },
                }}
              >
                <Image
                  src={backArrow}
                  width={16}
                  height={16}
                  objectFit="contain"
                ></Image>
                <Box component={"span"} sx={{ ml: 2 }}>
                  Back
                </Box>
              </Button>
              {/* Direction buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => SwitchViewsBack("FeaturesSelection")}
                  sx={{
                    display: "flex",
                    gap: "20px",
                    p: "25px",
                    width: { md: "181px", xs: "200px" },
                    height: "50px",
                    whiteSpace: "noWrap",
                    background: "#CC00D3",
                    fontFamily: ["Source Code Pro", "monospace"],
                    fontSize: "16px",
                    lineHeight: "30.17px",
                    textTransform: "capitalize",
                    weight: 600,
                    color: "white",
                    "&:hover": {
                      boxShadow: "none",
                      background: "#CC00D3",
                    },
                    borderRadius: "unset",
                  }}
                >
                  Deploy on Testnet
                </Button>
                <Button
                  onClick={() => SwitchViews("FeaturesSelection")}
                  sx={{
                    display: "flex",
                    gap: "20px",
                    p: "25px",
                    width: { md: "181px", xs: "200px" },
                    height: "50px",
                    background: "#CC00D3",
                    fontFamily: ["Source Code Pro", "monospace"],
                    fontSize: "16px",
                    lineHeight: "30.17px",
                    textTransform: "capitalize",
                    weight: 600,
                    color: "white",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      boxShadow: "none",
                      background: "#CC00D3",
                    },
                    borderRadius: "unset",
                    ml: { md: 2 },
                    mt: { md: 0, xs: 2 },
                  }}
                >
                  Deploy on Mainnet
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {Btn1 && <Administration_Panel></Administration_Panel>}
      </Box>
    </>
  );
}

export default Form;
