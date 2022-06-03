import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyle = makeStyles((theme) => ({
    root:{
        display: 'flex'
    },
    quantity:{
        minWidth: '60px',
        margin: '4px',
    },
    iconButtons:{
        borderRadius: '10px', 
        height: '45px', 
        border: '2px solid #9C27B0', 
        margin: '10px'
    }
}))

const  QtyButtons = [
    {
        type: 'add',
        icon: <AddIcon />
    },
    {
        type: 'remove',
        icon: <RemoveIcon />
    },
]

export default function ProductQuantity({ qty, setQty }) {
    

    const classes = useStyle();

    const handleQty = (type) => {
        if("add" === type && qty < 10){
            setQty(qty + 1);
        }else if("remove" === type && qty > 1){
            setQty(qty - 1);
        }
    }

    return (
        <div>Quantity of the selected size
        <div className={classes.root}>
            
            <TextField className={classes.quantity}
            variant="filled" 
            type="number"
            value={qty}
            fullWidth 
            InputProps={{ inputProps: { min: 1, max: 10 } }} />


            {QtyButtons.map((val,key) => {
                return(
                    <IconButton 
                    onClick={() => handleQty(val.type)}
                    key={key}
                    className={classes.iconButtons}
                    component="span"
                    >
                        {val.icon}
                    </IconButton>
                )
            })}
            
        </div>
        </div>
    )
}
