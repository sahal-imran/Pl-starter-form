import Box from "@mui/system/Box";
import Topography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import AnchorLink from "@mui/material/Link";

// Assets
import logo from "../../public/assets/pictures/logo.png";
import backArrow from "../../public/assets/pictures/backArrow.svg";

function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "130px",
          background:
            " linear-gradient(90.06deg, #223DBB 2.42%, #601BA5 96.68%)",
          px: { md: 4, xs: 3 },
        }}
      >
        {/* right part */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              width: "278px",
              height: "58px",
            }}
          >
            <Image src={logo} objectFit="contain"></Image>
          </Box>
          <Link href={""}>
            <AnchorLink
              sx={{
                ml: { md: 13, xs: "2px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Box>
                <Image
                  src={backArrow}
                  width={24}
                  height={24}
                  objectFit="contain"
                ></Image>
              </Box>
              <Topography
                sx={{
                  fontWeight: 600,
                  color: "white",
                  lineHeight: "20.11px",
                  letterSpacing: "3%",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  lineHeight: "20.11px",
                  letterSpacing: "0.05em",
                  fontFamily: ["Source Code Pro", "monospace"],
                }}
              >
                Back To Home
              </Topography>
            </AnchorLink>
          </Link>
        </Box>

        {/* Left part */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              background: " #FFFFFF",
              color: "#CC00D3",
              width: { md: "181px", xs: "140px" },
              height: "50px",
              textDecoration: "uppercase",
              p: 0,
              boxShadow: "0px 0px 9px rgba(255, 255, 255, 0.66)",
              whiteSpace: "nowrap",
              "&:hover": {
                boxShadow: "none",
                background: "white",
              },
            }}
          >
            connect Wallet
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
