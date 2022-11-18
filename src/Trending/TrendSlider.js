import { Button, Paper } from '@mui/material'
import React from 'react'

const TrendSlider = (props) => {
    return (
        <div>
            <Paper>props.item
                <img src={props.item.img} alt="aa" style={{ width: "100%", height: "100%" }} />
                <Button className="CheckButton">
                    Check
                </Button>
            </Paper>
        </div>
    )
}

export default TrendSlider
