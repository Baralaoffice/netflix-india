import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const usestyles = makeStyles({
  Header: {
    width: "100%",
    height: "574px",
    display: "block",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
    },
  },
  row: {
    width: "100%",
    display: "block",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
  },
  col: {
    display: "inline-block",
    position: "relative",
    left: "4rem",
    top: "5rem",
  },
  playbtn: {
    width: "150px",
    borderRadius: "5px !important",
    background: "#FFFFFF !important",
    color: "#000 !important",
    border: "0 !important",
    fontFamily: "IBM Plex Sans Thai, sans-serif !important",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    "&:hover": {
      background: "#C5C5C5 !important",
    },
  },
  playicon: {
    fontSize: "30px !important",
    marginLeft: "-15px",
    marginRight: "5px",
  },
  Infobtn: {
    width: " 150px",
    borderRadius: " 5px",
    fontFamily: "IBM Plex Sans Thai, sans-serif !important",
    fontSize: "17px !important",
    fontWeight: "700 !important",
    background: "#FFFFFF !important",
    color: "#000 !important",
    letterSpacing: " 0em !important",
    textAlign: "center !important",
    "&:hover": {
      background: "#C5C5C5 !important",
    },
  },
  col_btn: {
    marginTop: "8px",
  },
});
const Header = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Header}>
      <img
        src="img/krists-luhaers-AtPWnYNDJnM-unsplash.png"
        alt="header"
        style={{ width: "100%" }}
      />
      <Box className={classes.row}>
        <Box className={classes.col}>
          <img src="./img/Darlings.png" alt="drl" />
          <Box className={classes.col_btn}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" className={classes.playbtn}>
                <PlayArrowIcon className={classes.playicon} />
                Play
              </Button>
              <Button variant="contained" className={classes.Infobtn}>
                More Info
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
