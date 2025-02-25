import { Button } from "react-bootstrap";

function Course({img , title , text}){
    return(
        <>
            <div className=" mb-10 border border-black rounded-lg">
                <img src={img} className="img-fluid"  />
                <div className="m-3">
                    <p className="text-2xl">{title}</p>
                    <p className="text-md">{text}</p>
                    <Button className="bg-primary">خرید دوره</Button>
                </div>
            </div>
        </>
    );
}

export default Course