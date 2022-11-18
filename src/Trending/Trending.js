import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  movies: {
    width: '100%',
    position: 'relative',
    top: '-125px',
    left: '0',
    overflow: 'hidden',
    paddingTop: '35px'
  },
  category: {
    fontFamily: "Khula",
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '37px',
    //   letterSpacing: '0em',
      color: ' #FFFFFF',
    '& button': {
      fontFamily: "Khula",
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '37px',
      paddingLeft: '7px',
      color: ' #FFFFFF',
      textDecoration: 'none',
    },

  },
  
})

const Trending = () => {
  const classes = useStyles();
  const items = [
    { img: 'img/AAAABam.png' },
    { img: 'img/FRIENDS 1.png' },
    { img: 'img/AAAABam1.png' },
    { img: 'img/AAAABam2.png', width: '240px !important' },
    
  ];
  return (
    <div className={classes.movies}>
      <Container maxWidth="xl">
        <Box >
          <Box className={classes.category}>
            <Typography> 
            Trending Now
            <Link component='button'>Explore all  </Link>
            </Typography>
          </Box>
          <Box className={classes.main}>
            {
              <Carousel>
              {
                items.map((item, i) => <Box key={i} item={item} />)

              }

            </Carousel>
            }
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Trending

