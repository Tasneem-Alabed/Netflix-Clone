
// import {useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from '../Navbar/NavBar'
import './Favlist.css'
import { useEffect, useState } from 'react';
function FavList (props){
    const [updateFlag, setUpdateFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    
   
   

    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickedMeme(item);
        console.log(item);
    
}

  return(
        <>
        <Nav/>
        <h1>Favorit List</h1>
{props.data.map(item=>{
    return(
       <>
       <div id={item.id}>
       <Card  style={{class:"card" }}>
        <Card.Body >
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ item.release_date}</Card.Subtitle>
          <Card.Text>
           { item.overview}
          </Card.Text>
          <button className="delet" >Delet</button>
          <button className="update"  onClick={() => { showUpdateModal(item) }}>Update</button>
        </Card.Body>
      </Card>
      </div>
       </>
       
    )
})}
        </>
    )
    
}




export default FavList;