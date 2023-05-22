import MoviList from "../MovieList/MovieList";
import Navgbar from "../Navbar/NavBar";
// import Card from 'react-bootstrap/Card';

function Home(props){
  
    return(<>
   
    <Navgbar/>
 

<h1>MoviList</h1>
     <MoviList data={props.data} />
    </>)
};

export default Home;