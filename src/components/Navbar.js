import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   navbar:{
        background:'#fafbfc',
        boxShadow:'0px 0px 15px #e1e2e3',
        height:'100px',
        display:'flex',
        padding:'15px',
        alignItems:'center',
        ['@media(max-width:780px)']: { // eslint-disable-line no-useless-computed-key
           flexDirection:'column',
           justifyContent:'center',
           height:'150px'
          }
   },
   linkContainer:{
    display:'flex',
    flexDirection:'row',
    listStyleType:'none',
   },
   linkShowing:{
 ['@media(max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        display:'flex',
       flexDirection:'column',
      }
   },
   linkHiding:{
    ['@media(max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        display:'none'
      }
   },
   link:{
       margin:'0px 2rem',
       textDecoration:'none',
       fontSize:'20px',
       fontWeight:'bold',
       color:'black'
   },
   icon:{
    color:'brown',
    fontSize:30,
    display:'none',
    ['@media(max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        display:'block',
        position:'absolute',
        right:0
      }
   }
  }));
  

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const classes = useStyles();
     return (
        <div >
            <nav className={classes.navbar}>
            <Link  style={{margin:'0px 50px'}} to="/"><img src={logo}/></Link>
            <div>
            <ul className={`${classes.linkContainer} ${isOpen?classes.linkShowing:classes.linkHiding}`}>
              <li><Link className={classes.link}  to="/">Home</Link></li>
              <li><Link className={classes.link} to="/rooms">Rooms</Link></li>
            </ul>
            </div>
            <FaAlignRight className={classes.icon} onClick={()=>setIsOpen(!isOpen)}/>
        </nav>
        </div>
    )
}

export default Navbar
