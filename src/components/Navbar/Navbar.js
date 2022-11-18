import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu';
// import { Container } from '@mui/system';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Box className='navbar' sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#000' }}  >
                {/* <Container maxWidth="xl"> */}
                    <Toolbar  >
                        <Logo />
                        <Menu />
                        <SearchBar />
                    </Toolbar>
                {/* </Container> */}
            </AppBar>
        </Box>
    )
}

export default Navbar
