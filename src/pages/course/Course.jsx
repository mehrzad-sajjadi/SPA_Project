import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import CoursesData from "../../CourseData";

function Course(){
    let course = useParams().id;
    let item = CoursesData.find(obj=>obj.id==course);
    console.log(item);
    return(
        <>
            <Header></Header>
            <Container>
                <Row className="flex py-5" >
                        <Col lg={4} >
                            <img  src={item.img}  className=" h-auto object-contain"  />
                        </Col>
                        <Col lg={8} className="lg:pt-0 sm:pt-3">
                            <h3 style={{fontFamily:"lalezar"}} >{item.title}</h3>
                            <p className="pt-3">مدرس : مهرزاد سجادی</p>
                            <p><b>{item.text}</b></p>
                            <p className="text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </Col>
                </Row>
            </Container>
        </>
    )
}
export default Course;