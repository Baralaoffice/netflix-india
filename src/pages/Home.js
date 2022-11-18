import React from 'react'
import Hollywood from '../category/Hollywood'
import Header from '../components/Header';
import { makeStyles } from "@mui/styles";
import Trending from '../Trending/Trending';

const useStyles = makeStyles({
  home:{
    width:'100%',
    background: '#000000',
  }
})

const Home = () => {
  const classes = useStyles();
  return (
    <div  className={classes.home}>
       <Header/>
       <Hollywood/>
       <Trending/>
    </div>
  )
}

export default Home
