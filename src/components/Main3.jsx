import{
    Row,
    
    CardImg,
    Container,

} from 'reactstrap'

import '../header.css'
import Img from '../media/rasm.jpg'
import '../App.css'
import img from '../media/people.jpg'

const Main3 = () => {
    return(
       
            <Row className='main-section'>
                
                <div className='col-12'>
                    <div className='row main-section3 my-5'>
                            <div className="col-6 p-5 ">
                                
                                <p className='text-primary text-center'>TESTIMONIALS</p>
                                <h1 className='text-primary my-5 px-5 fw-bold'>Customers's quotes</h1>
                                <p className='text-center fw-bold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis, dolore voluptatem voluptas magni dicta?</p>
                            </div>
                            <div className='col-6 bg-white '>
                                <p className='main-section4 fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem laudantium inventore hic? Nobis, recusandae id deleniti ducimus adipisci porro? Harum, et! Est, suscipit error? Soluta quod ab odio molestias.</p>
                                <img className='peopleimg' src={img} alt="people" />
                            </div>
                    </div>
                </div>
                   
                
              
              <div className='accordion'>
                  <p className='text-primary text-center'>CUSTOMER HELP</p>
                  <h2 className='fx-bold text-primary text-center'>Frequently asked questions</h2>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    </div>
              </div>
                
                <div className='footer text-center text-white py-5'>
                        <p className='text-white my-5'>PLAN YOUR LIFE</p>
                        <p className='text-white display-5'>Get <b>started</b> now</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque non optio fuga quos impedit autem maxime, dignissimos sapiente pariatur ipsa veritatis culpa doloremque! Nostrum unde obcaecati quaerat nobis quidem.</p>
                        <button className='btn btn-white'>View pricing</button>
                        <button className='btn btn-primar'>Read documentation</button>
                </div>
                

                <div    className='col-5 py-5 footerr bg-white'>
                        <h4 className='fw-bold text-end text-primary my-3'>Sign up for newsletter</h4>

                        <p className='text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error eligendi nostrum similique rerum iusto amet illum, maiores omnis fugit?</p>
                </div>
                <div    className='col-7 bg-white'>
                    <button className='foter mx-5'>Email address</button>
                    <button className='btn btn-primary foterr'>Save me</button>
                </div>


                <Container>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex">
                       <CardImg className="logo" src={ Img } alt="rasm" />
                        <div className="ms-5">
                            <ul className="list-inline">
                                <li className="list-inline-item nav_size"><b>Home</b></li>
                                <li className="list-inline-item nav_size"><b>Blog</b></li>
                                <li className="list-inline-item nav_size"><b>Features</b></li>
                                <li className="list-inline-item nav_size"><b>Pricing</b></li>
                                <li className="list-inline-item nav_size"><b>Documentation</b></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="list-inline">
                           
                            <li className="list-inline-item mx-3 text-secondary"><i class="fab fa-facebook-f"></i> </li>
                            <li className="list-inline-item mx-3 text-secondary"><i class="fab fa-telegram-plane"></i> </li>
                            <li className="list-inline-item mx-3"><i class="fab fa-twitter text-primary"></i> </li>
                            <li className="list-inline-item fw-bolder mx-3">M</li>
                            <button className="btn getstart fw-bolder mx-3">Get Started</button>
                        </ul>
                    </div>
                </div>
                    <p className='text-center'>Copyright 2021 By Kamronbek</p>
            </Container>
            </Row>  
            
            
        
    )
}

export default Main3