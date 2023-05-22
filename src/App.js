import Home from "./componants/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorit from "./componants/FavList/Favlist"
import { Routes , Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'

function App() {
  const [trendData, setTrendData] = useState([]);

  const getTrending = () => {
     const serverURL = `http://localhost:3001`;


  axios.get(serverURL)
  .then(response => {
      
          console.log(response.data)
          setTrendData(response.data)

      })
  
  }
  useEffect(()=>
   getTrending() ,[]
  );
  return (
   <>
   
   <Routes>
    <Route path="/" element={<Home data={trendData}/>}></Route>
    <Route path="/Favorit" element={<Favorit data={trendData} />}></Route>
   </Routes>
   </>
  );
}

export default App;
