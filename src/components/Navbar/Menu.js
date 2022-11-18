import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  menu: {
    width: '100%',
    height: 48,
    alignItems: 'end',
    display: 'flex',
  },
  menu_item: {
    display: 'flex',
    gap: ' 16px',
    paddingLeft: '44px',
    '& a': {
      textDecoration: 'none !important',
      color: '#fff',
      fontFamily: 'Khula, sans-serif',
      fontSize: '17px',
      fontWeight: 400,
      textIndent: '4px',
      letterSpacing: '0em'
    }
  }
});


const Menu = () => {
  const classes = useStyles();
  const pages = [
    {
      name: "HOME",
      path: "/"
    },
    {
      name: "TV-SHOWS",
      path: "/Tvshows"
    },
    {
      name: "MOVIES",
      path: "/Movies"
    },
    {
      name: "NEW",
      path: "/News"
    },
    {
      name: "POPULAR",
      path: "/Popular"
    },
  ];

  return (
    <div className={classes.menu}>
      <Typography className={classes.menu_item}>
        {
          pages.map(({name, path},index) => (
            <Link 
            key={index}
            to={path}
            >
              {name}
            </Link>
          ))
        }
      </Typography>

    </div>
  )
}

export default Menu
