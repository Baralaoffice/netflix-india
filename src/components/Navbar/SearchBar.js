import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  search: {
    // width: '100%',
    // height: 48,
    width: '326px',
    height: '39px',
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    
  // },
  marginLeft: 0,
  width: '100%',
  border: '4px solid #B8B8B8',
  color: '#fff',
    // width: '326px',
    height: '39px',
    borderRadius: '30px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.search}>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
}
export default SearchBar