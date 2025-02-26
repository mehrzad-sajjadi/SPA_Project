import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return(
        <footer  className="py-4 bg-[rgb(186,182,253)]">
            <Container>
                <Row>
                    <Col>
                        <h2>رسالت نکست وان کد</h2>
                        <p>
                            نکست وان کد با هدف تولید آموزشهایی ایجاد شده ، که حس شیرین یادگیری لذت بخش برنامه نویسی و طراحی وب را تجربه کنید
                        </p>
                    </Col>
                    <Col className="flex justify-end my-auto">
                        <img className="w-16 h-16" src="data:image/png;base64,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" alt="" />
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}
export default Footer;