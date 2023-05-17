import MoviList from "../MovieList/MovieList";
import axios from "axios";
import Navgbar from "../Navbar/NavBar";
import { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';

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
 

<p>MoviList</p>
     <MoviList data={trendData}/>
    </>)
};

export default Home;