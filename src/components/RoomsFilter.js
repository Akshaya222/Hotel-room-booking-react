import React,{useContext} from 'react';
import {RoomsContext} from '../Context';
import {
    makeStyles,
    FormControl,
    Slider,
    NativeSelect,
    Checkbox,
    FormControlLabel,
    TextField
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
  

const RoomsFilter = () => {
    const classes = useStyles();  
    const context=useContext(RoomsContext);
    console.log("contentnfd ^^^^^ ^^",context)
    React.useEffect(()=>{
     context.filterRooms();
    },[context.type,context.perNo,context.size,context.price,context.bf,context.pets])


    return (
        <div>
             <div>
        <form style={{width:'90%',margin:'3rem auto',display:'flex',alignItems:'center'}}>
          
          <FormControl className={classes.formControl}>
            <span>Room Type</span>
            <NativeSelect style={{border:'1px solid black',width:'200px'}} name="type"
              value={context.type}
              onChange={context.handleChange}
            >
              <option value="all">all</option>
              <option value="triple">triple</option>
              <option value="family">family</option>
              <option value="double">double</option>
              <option value="single">single</option>
              <option value="presidential">presidential</option>
            </NativeSelect>
          </FormControl> <FormControl className={classes.formControl}>
          <span>Guests</span>
            <NativeSelect
              style={{border:'1px solid black',width:'200px'}}
              value={context.perNo} name="perNo"
              onChange={context.handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={10}>10</option>
            </NativeSelect>
          </FormControl>
            <FormControl style={{width:'200px'}} className={classes.formControl}>
              <span>Room Price $ {context.price}</span>
              <Slider value={context.price} name="price" valueLabelDisplay="auto" step={15} min={context.minPrice} max={context.maxPrice} marks onChange={context.handleChange}  aria-labelledby="continuous-slider" />
          </FormControl>
          <FormControl className={classes.formControl}>
              <span>Room Size</span>
              <TextField name="size" value={context.size} onChange={context.handleChange} style={{border:'1px solid black',width:'200px'}}  />
          </FormControl>
          <div style={{display:'flex',flexDirection:'column'}}>
          <FormControlLabel
            control={<Checkbox  size="small"
            color="default" name="bf" value={context.bf} onChange={context.handleChange} />}
            label="Breakfast"
          />
         <FormControlLabel style={{marginTop:'-10px'}}
            control={<Checkbox  size="small"
            color="default" name="pets" value={context.pets} onChange={context.handleChange} />}
            label="Pets"
          />
          </div>
        </form>
      </div>
        </div>
    )
}

export default RoomsFilter
