import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import codeImage from "../../assets/img/programming.svg";
import Footer from "../../components/Footer";
import CourseItem from "../../components/CourseItem";
import CoursesData from '../../CourseData';

function Home(){


    return(
        <>
            <Header></Header>
            
            <Container className="mt-5 px-4">
                <Row className="align-middle ">
                    {/* lg -> بعد از lg هر ستون 6 قسمت از 12 قسمت رو میگیرن */}
                    {/* کوچکتر از lg تمام 12 قسمت رو میگیرن */}
                    <Col lg="6">
                        <h1>برنامه نویسی با نکست وان کد</h1>
                        <p className="text-justify mt-4">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </Col>
                    <Col lg="6" className="py-3">
                        <img src={codeImage} className="img-fluid" />
                    </Col>

                </Row>
                <Row className="pt-16 flex justify-center pb-5">
                    <h2 style={{fontFamily:"Vazir"}} className="mb-5" >دوره های آموزشی</h2>
                    {
                        CoursesData.map(item=>(
                            <Col key={item.id} className="py-3" md={6} lg={4} xl={3} >
                                <CourseItem {...item}/>
                            </Col>)
                        )
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
export default Home;