import React,{useContext} from 'react';
import {useParams} from 'react-router-dom';
import {RoomsContext} from '../Context';
import defaultImage from '../images/defaultBcg.jpeg';
import Banner from './Banner';
import Hero from './Hero';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
   Container:{
        width:'90%',
        margin:'3rem auto'
    },
    images:{
        width:'95%',
        margin:'2rem auto',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(275px,1fr))',
        gridColumnGap:'1rem',
        gridRowGap:'2rem'
    },
    extras:{
        margin:'2rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
        gridColumnGap: '2rem',
        gridRowGap: '1rem'
    }
})

const SingleRoom = () => {
    const classes=useStyles();
    const {singleId}=useParams();
    const data=useContext(RoomsContext)
    console.log("data rooms",data.rooms)
   const getRoom=(rooms,slug)=>{
      const room= rooms.find((room)=>room.slug==slug);
      return room;
    }
   const singleRoom=getRoom(data.rooms,singleId)
   console.log("singleROom",singleRoom);
   if(!singleRoom){
        return (
        <Hero>
        <Banner title="No such rooms could be found">
            <Link to="/rooms" style={{textDecoration:'none',color:'black'}}>back to rooms</Link>
        </Banner>
       </Hero>
        )
   }else{
       const {breakfast,capacity,description,extras,featured,id,images,name,slug,pets,price,size,type}=singleRoom
    return (
        <div>
         <Hero hero="rooms">
           <Banner title={`${name} room`}>
               <Link to="/rooms" style={{textDecoration:'none',color:'black'}}>back to rooms</Link>
           </Banner>
        </Hero>
        <div className={classes.Container}>
           <div className={classes.images}>
                {
                    images.map((image)=>{
                        return <img width="100%" src={image}/>
                    })
                }
           </div>
           <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
               <div style={{width:'60%'}}>
                   <h2>Details</h2>
                   <p>{description}</p>
               </div>
               <div  style={{width:'30%'}}>
                   <h2>Info</h2>
                   <p style={{margin:'8px 0px'}}> Price : $ {price} </p>
                   <p style={{margin:'8px 0px'}}> Size : {size} SQFT</p>
                   <p style={{margin:'8px 0px'}}> Max Capacity : {capacity>1?`${capacity} people`:`${capacity} person`}</p>
                   <p style={{margin:'8px 0px'}}>{pets?'Pets Allowed':'No Pets Allowed'}</p>
                   <p>{breakfast?"Free Breakfast Included":null}</p>
               </div>
           </div>
           <div style={{margin:'1rem auto'}}>
               <h2>Extras</h2>
               <section className={classes.extras}>
               {
                   extras.map((extra)=>{
                       return <div>
                           <p> - {extra}</p>
                       </div>
                   })
               }
               </section>
           </div>
        </div>
        </div>
    )
   }
}

export default SingleRoom
