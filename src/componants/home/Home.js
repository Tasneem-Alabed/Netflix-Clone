import MoviList from "../MovieList/MovieList";
import axios from "axios";
import Navgbar from "../Navbar/NavBar";
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function Home(){
    const [trendData, setTrendData] = useState([]);

    const getTrending = () => {
       const serverURL = `http://localhost:3001/trending`;


    axios.get(serverURL)
    .then(response => {
        
            console.log(response.data)
            setTrendData(response.data)

        })
    
    }
    useEffect(()=>
     getTrending() ,[]
    );
    return(<>
   
    <Navgbar/>
 
{trendData.map(item=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.release_date}</Card.Subtitle>
          <Card.Text>
           {item.overview}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    )
})}
<p>MoviList</p>
     <MoviList />
    </>)
};

export default Home;