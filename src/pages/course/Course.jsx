import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import CoursesData from "../../CourseData";
function Course(){
    let course = useParams().id;
    console.log(course);
    return(
        <>
            <Header></Header>
            dksjfklsdjl
        </>
    )
}
export default Course;