import { useEffect, useState } from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';
function MovieList(){
    const [APIData, setAPIData] = useState([]);

    const getAPIData = () => {
       const serverURL = `http://localhost:3001/search`;


    axios.get(serverURL)
    .then(response => {
        
            console.log(response.data)
            setAPIData(response.data)

        })
    
    }

    const addToFav =(item)=>{
        const serverURL1 = `http://localhost:3001/addMovie`;
        axios.post(serverURL1,item);
    }
    useEffect(()=>
        getAPIData() ,[]
    );
    return(
        
        <>

{APIData.map(item=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.release_date}</Card.Subtitle>
          <Card.Text>
           {item.overview}
          </Card.Text>
          
         <button onClick={()=>{addToFav(item)}}>Add To Favorit</button>
        </Card.Body>
      </Card>
    )
})}
        </>
    )
}
export default MovieList;