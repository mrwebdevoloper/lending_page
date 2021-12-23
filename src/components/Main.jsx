import '../header.css'
import{
    
    Row,
    Col,
    Card,
    CardBody,
    Cardtitle,
    CardText
   

}from "reactstrap"


const Main = () => {
    return(
        <div className="conrtainer">
            <Row>
                <p className='text-primary text-center my-5'>ABOUT US</p>
                <h3 className='text-primary text-center my-5'>Read about our app</h3>
                <Col md={{size:3}} >
                        <Card className='Card_section'>
                            <CardBody className="wrapp-icons">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-home"></i>
                                                </div>
                                            </div>
                            </CardBody>
                            <div className='text-center my-5'>
                                <h3 className='text-primary' >Overview</h3>
                            </div>
                            <CardText className='my-3'>
                                <p className='pclass text-center' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam,</p>
                            </CardText>
                        </Card>                
                </Col>
                <Col md={{size:3}}>
                        <Card className='Card_section'>
                            <CardBody className="wrapp-icons">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-folder"></i>
                                                </div>
                                            </div>
                            </CardBody>
                            <div className='text-center my-5'>
                                <h3 className='text-primary' >Files</h3>
                            </div>
                            <CardText className='my-3'>
                                <p className='pclass text-center' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam,</p>
                            </CardText>
                        </Card>     
                        <button className='btn-primaryy text-end p-3'>Read More</button>             
                </Col>
                <Col md={{size:3}}>
                        <Card className='Card_section'>
                            <CardBody className="wrapp-icons">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="far fa-comment-alt"></i>
                                                </div>
                                            </div>
                            </CardBody>
                            <div className='text-center my-5'>
                                <h3 className='text-primary' >Meeting chats</h3>
                            </div>
                            <CardText className='my-3'>
                                <p className='pclass text-center' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam,</p>
                            </CardText>
                        </Card>        
                        <button className='btn btn-primary p-3 getst'>Get started</button>          
                </Col>
                <Col md={{size:3}}>
                        <Card className='Card_section'>
                            <CardBody className="wrapp-icons">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex wrapp-icon justify-content-center align-items-center rounded-circle">
                                                    <i class="fas fa-upload"></i>
                                                </div>
                                            </div>
                            </CardBody>
                            <div className='text-center my-5'>
                                <h3 className='text-primary' >Save events</h3>
                            </div>
                            <CardText className='my-3'>
                                <p className='pclass text-center' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit excepturi laudantium corporis, tenetur provident aliquam,</p>
                            </CardText>
                        </Card>     
                           
                </Col>

                <Col className='col-6  section'>
                    <CardBody className='text-end'><i class="fas fa-tachometer-alt "></i></CardBody>
                    <div className='number'>
                        <h1 className='text-end'>89%</h1>
                    </div>
                    <div>
                        <h3>Customers who have 
                             increased their productivity
                            </h3>
                    </div>

                </Col>
                
                <Col className='col-6  section2'>
                    <CardBody className='text-start'><i class="fas fa-user-friends"></i></CardBody>
                    <div className='number'>
                        <h1 className='text-start'>3123</h1>
                    </div>
                    <div>
                        <h2>Users who have used our application
                            </h2>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Main
