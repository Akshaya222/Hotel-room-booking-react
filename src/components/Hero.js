import React from 'react';
import {makeStyles} from '@material-ui/core';
import defaultBcg from '../images/defaultBcg.jpeg';
import room from '../images/room-1.jpeg';
import Banner from './Banner';

const useStyles=makeStyles({
    heroComponent:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    heroDefault:{
            backgroundImage:`url(${defaultBcg})`,
            backgroundRepeat:'no-repeat',
            minHeight:'calc(100vh - 100px)',
            backgroundSize:'cover'
    },
    rooms:{
        backgroundImage:`url(${room})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        minHeight:'70vh'
    }
})

const Hero = (props) => {
    const {hero,children}=props;
    console.log("children",children);
    const classes=useStyles();
    console.log("hero",classes.rooms)
    return (
        <div>
            <div className={`${classes.heroComponent} ${hero?classes.rooms:classes.heroDefault}`}>
             {children}
            </div>
           
        </div>
    )
}
// Hero.defaultProps={
//     hero:"heroDefault"
// }

export default Hero
