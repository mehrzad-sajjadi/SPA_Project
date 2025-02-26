import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

// function Course({img , title , text}){
//     return(
//         <>
//             <div className=" mb-10 border border-gray-400 rounded-lg">
//                 <img src={img} className="img-fluid"  />
//                 <div className="m-3">
//                     <p className="text-2xl">{title}</p>
//                     <p className="text-md">{text}</p>
//                     <Button className="bg-primary">خرید دوره</Button>
//                 </div>
//             </div>
//         </>
//     );
// }



function Course({img , title , text}) {
  const getId = useParams().lskfldsjlj;
  console.log(getId);
  return (
    <Card >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        <Button variant="primary">
          <Link className="text-white no-underline">
            خرید دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}


export default Course