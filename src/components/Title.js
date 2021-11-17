import React from 'react'
import {makeStyles} from '@material-ui/core';
import { Divider } from '@material-ui/core';

const useStyles=makeStyles({
     text:{
        textTransform:'capitalize',
        letterSpacing:'1px',
        textAlign:'center'
     },
     lineContainer:{
        display:'flex',
        justifyContent:'center'
    },
     underLine:{
        borderBottom:'4px solid #bfa85e',
        width:'70px',
        margin:'-0.7rem 0px 2rem 0px'
    }
})

const Title = ({title}) => {
    const classes=useStyles();
    return (
        <div>
            <h2 className={classes.text}>{title}</h2>
            <div className={classes.lineContainer}>
              <div className={classes.underLine}></div>
            </div>
        </div>
    )
}

export default Title
