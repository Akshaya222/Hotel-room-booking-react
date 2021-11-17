import React,{useContext} from 'react';
import {makeStyles} from '@material-ui/core';
import {RoomsContext} from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

const useStyles=makeStyles({
  container:{
    width:'90%',
    margin:'0 auto',
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
    gridRowGap: '1rem',
    gridColumnGap: '2rem'
  }
})


const FeaturedRooms = () => {
  const classes=useStyles();
    const data=useContext(RoomsContext)
    let {rooms,featuredRooms,loading}=data;
    let items=featuredRooms.map((room)=>{
      return <Room key={room.id} room={room}/>
  })

    return (
        <React.Fragment>
          <section style={{padding:'2rem'}}>
          <div style={{margin:'2rem 0rem'}}>
           <Title title="featured rooms"/>
          </div>
          <div className={classes.container}>
          {
            loading?<Loading/>:items
          }
           </div>
         </section>
        </React.Fragment>
    )
}

export default FeaturedRooms
