import { Button, Paper } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'

const MovieSlider = (props) => {
    return (
        <div>
            <Paper>
                <img src={props.item.img} alt="aa" style={{ width: "100%", height: "500px" }} />
                <Button className="CheckButton">
                    Check
                </Button>
            </Paper>
        </div>

    )

}

export default MovieSlider
