import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles=makeStyles({
      imgContainer:{
          position:'relative',
          '& $priceOverlay':{
            position:'absolute'
          },
          '& $button':{
            position:'absolute'
          },
          '&:hover':{
            backgroundColor:'rgba(0,0,0,0.8)',
            '& $button':{
              opacity:'1'
            },
            '& $priceOverlay':{
              opacity:'0'
            },
            '& $img':{
              opacity:'0.3'
            }
         }
      },
      priceOverlay:{
         top:1,
         left:1,
         background:'black',
         color:'white',
         padding:'3px'
      },
      button:{
         marginTop:'6rem',
         marginLeft:'-14.5rem',
         textDecoration:'none',
         color:'white',
         letterSpacing:'1px',
         border:'2px solid white',
         padding:'5px 10px',
         textTransform:'uppercase',
         opacity:'0',
         '&:hover':{
           background:'#bfa85e',
           color:'black',
           border:'2px solid black'
         }
      },
      name:{
        backgroundColor:'#8d8f91',
        textAlign:'center',
        height:'5%',
        marginTop:'-0.4rem',
        textTransform:'capitalize',
        letterSpacing:'1.5px',
        padding:'5px 0px'
      }
     
  })
  

const Room = ({room}) => {
    const classes=useStyles();
console.log(room.images)
    return (
       <article >
            <div >
         <div style={{boxShadow:'0px 0px 10px #78797a'}}  className={classes.imgContainer}>
           <img width="100%" className={classes.img}  style={{height:'95%'}} src={room.images[0]}></img>
          <span className={classes.priceOverlay}>
           <p> $ {room.price}</p>
           <p>per night</p>
          </span>
          <Link to={`/singleRoom/${room.slug}`} className={classes.button}>features</Link>
          <h6 className={classes.name}>{room.name}</h6>
         </div>
        </div>
       </article>
    )
}

export default Room
