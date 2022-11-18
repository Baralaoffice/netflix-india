import React from "react";
import { Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    Width:'152px',
    Height:"44px"
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <Link href="#">
          <img src="/img/pngwing 1.png" alt="logo" style={{display: 'block'}}/>
        </Link>
      </Typography>
    </div>
  );
};

export default Logo;
