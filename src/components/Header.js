import {
    
    Col,
    Row,
    CardImg


} from "reactstrap"
import Audi from '../media/audi.jpg'
import Bit from '../media/bit.jpg'
import watch from '../media/WATCH.jpg'
import facebook from '../media/facebook.jpg'
import atlas from '../media/atlas.jpg'
import screen from '../media/screen.png'
import '../header.css'

const Header = () => {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="bg-Custom">
                            <Row>
                                <Col lg="12">
                                    <div className="text-center">
                                        <div>
                                            <p>Plan Your Life </p>
                                            <h1 className="display-3 ">Increase your <span className="text-primary">Productivity</span></h1>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam, quia dolor nostrum animi, libero obcaecati! Quisquam accusamus ad commodi nisi placeat, non ipsa?
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                            <div className="bg-Image">
                            </div>
                    </div>
                    <div className="carousel-item">
                    <div className="bg-Custom">
                            <Row>
                                <Col lg="12">
                                    <div className="text-center">
                                        <div>
                                            <p>Plan Your Life </p>
                                            <h1 className="display-3 ">Increase your <span className="text-primary">Productivity</span></h1>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam, quia dolor nostrum animi, libero obcaecati! Quisquam accusamus ad commodi nisi placeat, non ipsa?
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                            <div className="bg-Image">
                            </div>
                    </div>
                    <div className="carousel-item">
                    <div className="bg-Custom">
                            <Row>
                                <Col lg="12">
                                    <div className="text-center">
                                        <div>
                                            <p>Plan Your Life </p>
                                            <h1 className="display-3 ">Increase your <span className="text-primary">Productivity</span></h1>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam, quia dolor nostrum animi, libero obcaecati! Quisquam accusamus ad commodi nisi placeat, non ipsa?
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                            <div className="bg-Image">
                            </div>
                    </div>
                </div>
            </div>
            <div >
                <div  className=" section-3">
                    <img className="mx-4" src={watch} alt="Watch" />
                    <img className="mx-4" src={Bit} alt="Bit" />
                    <img className="mx-4" src={facebook} alt="Facebook" />
                    <img className="mx-4" src={atlas} alt="Atlas" />
                    <img className="mx-4" src={Audi} alt="Audi" />
                </div>
                
                
            </div>
            <Row>
                <Col lg='6' sm='12' className="col-6 text-center wrapper  " >
                 <p className="text-primary"> DESKTOP AND MOBILE APP</p>
                 <h3 className="text-primary"><b>Plan</b> <span>and</span> <b>manage</b></h3>
                 <p className="section_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat accusamus inventore deserunt eveniet exercitationem omnis nihil nostrum rem consequatur corporis atque adipisci, laboriosam veritatis consequuntur vitae cum laudantium officia!</p>
                 <button className="bg-primary p-3 mx-3">View Video</button>
                 <button className="p-3 mx-3">See features</button>
                </Col>
                <Col lg='6' sm='12' className="col-6 text-center wrapper  " >
                    <CardImg className="section_img" src={screen} alt />
                </Col>
            </Row>
        </>
    )
}

export default Header