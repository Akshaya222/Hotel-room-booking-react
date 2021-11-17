import React from 'react';
import Room from './Room';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    Container: {
      width: "90%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
      gridRowGap: "1rem",
      gridColumnGap: "2rem",
    }
  });

const RoomsList = (rooms) => {
    console.log("rooms reciedvdfd",rooms.rooms)
    const classes = useStyles();
     if(!rooms.rooms||rooms.rooms.length==0){
       return(
        <h2>Unfortunately no rooms found on your search preferences</h2>
       )
     }
     else{
      return (
        <div className={classes.Container}>
        {rooms.rooms.map((room) => {
          return <Room room={room} />;
        })}
      </div>
      )
     }
}

export default RoomsList
