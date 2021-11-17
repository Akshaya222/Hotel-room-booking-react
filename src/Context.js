import React,{createContext,useState,useEffect} from 'react';
import items from './data';

const RoomsContext=createContext(null);

const Context = ({children}) => {
    const [state,setState]=useState({
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true,
       type:"all",
       perNo:1,
       price:0,
       minPrice:0,
       maxPrice:0,
       size:0,
       bf:false,
       pets:false
    });
  
    const formatRooms=(items)=>{
        let tempItems=items.map((item)=>{
            let id=item.sys.id;
            let images=item.fields.images.map((image)=>
                image.fields.file.url
            );
            let fields=item.fields;
            let room={id,...fields,images} 
            return room;
        })
        return tempItems;
    }

    useEffect(()=>{
         let rooms=formatRooms(items);
         let featuredRooms=rooms.filter((item)=>item.featured===true);
         let maxPrice=Math.max(...rooms.map((item)=>item.price));
         let maxSize=Math.max(...rooms.map((item)=>item.size));
         setState({
             ...state,
             rooms:rooms,
             featuredRooms:featuredRooms,
             sortedRooms:rooms,
             loading:false,
             price:maxPrice,
             maxPrice,
             size:maxSize
         })
    },[])

    const filterRooms=()=>{
        console.log("filter rooms",state);
        let rooms=formatRooms(items)
        let filteredRooms=rooms
        if(state.type!=="all"){
          filteredRooms= filteredRooms.filter((item)=>item.type==state.type)
          console.log("filtered rooms 1",filteredRooms);
        }
        if(parseInt(state.perNo)!=1&&filteredRooms){
            filteredRooms=filteredRooms.filter((item)=>item.capacity==state.perNo)
            console.log("filtered rooms 2",filteredRooms);
        }
        if(filteredRooms){
            filteredRooms=filteredRooms.filter((item)=>item.price<=state.price)
            console.log("filtered rooms 3",filteredRooms)
        }
        if(filteredRooms){
            filteredRooms=filteredRooms.filter((item)=>item.size<=state.size)
            console.log("filtered rooms 4",filteredRooms)
        }
        if(filteredRooms){
            filteredRooms=filteredRooms.filter((item)=>item.breakfast==state.bf)
            console.log("filtered rooms 5",filteredRooms)
        }
        if(filteredRooms){
            filteredRooms=filteredRooms.filter((item)=>item.pets==state.pets)
            console.log("filtered rooms 6",filteredRooms)
        }
        console.log("filtered rooms 7",filteredRooms)
         setState({
             ...state,
             sortedRooms:filteredRooms || state.sortedRooms
         })
        console.log("state***********",state)
       console.log("me else...")
    }
    const handleChange=(event,newValue)=>{
        console.log("new value",newValue)
        console.log("type of nmuber",typeof(newValue))
        const name=event.target.name;
        let newPrice=null;
        if(typeof(newValue)!=="boolean"){
            newPrice=newValue
        }
        let value=null
        if([name]=="bf"||[name]=="pets"){
            value=event.target.checked
        }
        else{
            console.log("came here")
            value=event.target.value
        }
       console.log("name is",name,"value is",value)
       setState({
            ...state,
            [name]:value,
            price: newPrice || state.maxPrice
        })
        setTimeout(()=>{console.log("heloooo",state)},3000)
    }

    return (
        <div>
            <RoomsContext.Provider value={{...state,filterRooms,handleChange}}>
                {
                    children
                }
            </RoomsContext.Provider>
        </div>
    )
}

const RoomConsumer=RoomsContext.Consumer;
export {Context,RoomConsumer,RoomsContext}
