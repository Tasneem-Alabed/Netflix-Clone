import Home from "./componants/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorit from "./componants/FavList/Favlist"
import { Routes , Route } from "react-router-dom";
function App() {
  return (
   <>
   
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Favorit" element={<Favorit/>}></Route>
   </Routes>
   </>
  );
}

export default App;
