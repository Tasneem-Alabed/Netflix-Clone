import Card from 'react-bootstrap/Card';
import ModalMovie from "../ModalMovie/ModalMovie";
function Movie (props){
    // let x = props.data;
    return (
        <>
 <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ props.data}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ props.data2}</Card.Subtitle>
          <Card.Text>
           { props.data3}
          </Card.Text>
          
         <button >Add To Favorit</button>
        </Card.Body>
      </Card>
      
      <ModalMovie />
        </>

      
    )
}

export default Movie;