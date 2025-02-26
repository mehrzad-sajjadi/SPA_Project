import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

function CourseItem({img , title , text,id}) {
  const getId = useParams().id;
  return (
    <Card >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        <Button variant="primary">
          <Link to={`course/${id}`} className="text-white no-underline">
            خرید دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}


export default CourseItem;