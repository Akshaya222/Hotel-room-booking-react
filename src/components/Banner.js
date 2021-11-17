import React from 'react';
import {makeStyles, rgbToHex} from '@material-ui/core';

const useStyles=makeStyles({
    bannerDiv:{
        background:`rgb(0, 0, 0,0.5)`,
        padding:'2rem 5rem'
    },
    text:{
        textAlign:'center',
        color:'#fff',
        textTransform:'capitalize',
        letterSpacing:'2px'
    },
    underLine:{
        borderBottom:'4px solid #bfa85e',
        width:'100px',
        marginBottom:'25px'
    },
    lineContainer:{
        display:'flex',
        justifyContent:'center'
    }
});

const Banner = ({title,subtitle,children}) => {
    const classes=useStyles();
    console.log("title",title);
    console.log("subtitle",subtitle);
    console.log("children banner",children)
    return (
        <div className={classes.bannerDiv}>
           <h1 className={classes.text}>{title}</h1>
           <div className={classes.lineContainer}>
           <div className={classes.underLine}></div>
           </div>
           <h5 className={classes.text} style={{color:'#f0f5f0'}}>{subtitle}</h5>
           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <button style={{background:'#bfa85e',color:'black',fontSize:'15px',textTransform:'uppercase',letterSpacing:'1px',padding:'8px 25px',outline:'none',border:'1px solid black'}}>{children}</button>
           </div>
        </div>
    )
}

export default Banner
