import React, { useContext,useState } from "react";
import { RoomsContext } from "../Context";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Title from "./Title.js";
import RoomsContainer from './RoomsContainer';
import Room from "./Room.js";
import {
  makeStyles
} from "@material-ui/core";


const useStyles = makeStyles({
  Container: {
    width: "90%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
    gridRowGap: "1rem",
    gridColumnGap: "2rem",
  },
  formControl:{
    margin:'0rem 1.5rem'
  }
});

const Rooms = () => {
 

  return (
    <div>
      <Hero hero="rooms">
        <Banner title="Our Rooms">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            return home
          </Link>
        </Banner>
      </Hero>
      <div style={{ margin: "3rem auto" }}>
        <Title title="Search rooms" />
      </div>
      {
        //filtering rooms section
      }   
      <RoomsContainer/>
    </div>
  );
};

export default Rooms;
