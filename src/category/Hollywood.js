/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { makeStyles } from "@mui/styles";
import Carousel from 'react-material-ui-carousel';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  movies: {
    width: '100%',
    position: 'relative',
    top: '-145px',
    left: '0'
  },
})
const Hollywood = () => {
  const classes = useStyles();
  const items = [
    {
      img: 'img/13-reasons-why-netflix-127067 1.png',
    },
    {
      img: 'img/movies.png',
    },
    {
      img: 'img/movies1.png',
    },
    {
      img: 'img/movies2.png',
    },
    {
      img: 'img/movies3.png',
    },
    {
      img: 'img/movies4.png',
    },
    {
      img: 'img/movies5.png',
    },
    {
      img: 'img/movies6.png',
    },
  ]
  return (

    <div className={classes.movies}>
      <Container maxWidth="xl">
        <Box >
          <Box className={classes.category}>
            <Link component='button'>Hollywood Movies </Link>
          </Box>
          <Box className={classes.main}>
            <Carousel>
              {
                items.map(({item},i) => <Box key={i} item={item} style={{width:"100%", height:'100%'}}/>)
              }
            </Carousel>

          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Hollywood
