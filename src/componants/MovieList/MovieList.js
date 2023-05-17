// import { useEffect, useState } from 'react'
// import axios from "axios";
// import Card from 'react-bootstrap/Card';
import Movie from "../Movie/Movie"
function MovieList(props){
    
    return(
        
        <>

{props.data.map(item=>{
    return(
       <Movie data={item.title} data2={item.release_date} data3={item.overview}/>
       
    )
})}
        </>
    )
}
export default MovieList;