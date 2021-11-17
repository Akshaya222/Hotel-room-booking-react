import React from 'react';
import errorImage from '../images/error.jpeg';
import {Paper,makeStyles,Button} from '@material-ui/core';
import Hero from './Hero';
import Banner from './Banner';
import {
    Link
  } from "react-router-dom";
import { FaBlackberry } from 'react-icons/fa';

// const useStyles=makeStyles({
//     container:{
//         minHeight:'100vh',
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })

const Error = () => {
    return (
        <div>
            {
                /**
                 *  <Paper elevation={3} style={{width:'400px',height:'400px',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
               <img width="100%" height="350px" src={errorImage}/>
               <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <Link style={{textDecoration:'none'}} to="/"><Button variant="contained" color="primary">Return to home</Button></Link>
               </div>
            </Paper>
                 */
                <Hero>
                    <Banner title="404 error" subtitle="page not found">
                        <Link to="/" style={{textDecoration:'none',color:'black'}}>return home</Link>
                    </Banner>
                </Hero>

            }
        </div>
    )
}

export default Error
