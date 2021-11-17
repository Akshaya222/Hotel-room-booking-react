import React,{useState} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from 'react-icons/fa'
import { Fab } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    container:{
        width:'90%',
        margin:'0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridRowGap: '1rem',
        gridColumnGap: '50px'
    }
});

const Services = () => {
    const classes=useStyles();
    const [services,setServices]=useState([
        {
            icon:<FaCocktail/>,
            title:'free cocktails',
            info:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
        },
        {
            icon:<FaHiking/>,
            title:'high hikings',
            info:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
        },
        {
            icon:<FaShuttleVan/>,
            title:'free shuttervans',
            info:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
        },
        {
            icon:<FaBeer/>,
            title:'strongest beer',
            info:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
        }
    ]);
    return (
        <div style={{background:'#dedcd7',padding:'3rem 0px'}}>
           <Title title="services"/>
           <section className={classes.container}>
           {
               services.map((item,index)=>{
                   return <article key={index}>
                             <span style={{fontSize:40,color:'#bfa85e',display:'flex',justifyContent:'center',marginBottom:'1rem'}}>{item.icon}</span>
                             <h6 style={{textTransform:'capitalize',textAlign:'center'}}>{item.title}</h6>
                             <p style={{width:'90%',margin:'0 auto'}}>{item.info}</p>
                          </article>
               })
           }
           </section>
        </div>
    )
}

export default Services
