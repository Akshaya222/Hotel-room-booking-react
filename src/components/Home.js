import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
            <Link to="/rooms" style={{textDecoration:'none',color:'black'}}>our rooms</Link>
        </Banner>
       </Hero>
      <Services/>
      <FeaturedRooms/>
        </div>
    )
}

export default Home
