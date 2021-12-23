import{
    Container,
    CardImg

} from "reactstrap"
import Img from '../media/rasm.jpg'

 const NavigationBar = () => {
     return(
         <>
            <Container>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex">
                       <CardImg className="logo" src={ Img } alt="rasm" />
                        <div className="ms-5 ">
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
                        <ul className="list-inline nav_sizes">
                           
                            <li className="list-inline-item mx-3 text-secondary"><i class="fab fa-facebook-f"></i> </li>
                            <li className="list-inline-item mx-3 text-secondary"><i class="fab fa-telegram-plane"></i> </li>
                            <li className="list-inline-item mx-3"><i class="fab fa-twitter text-primary"></i> </li>
                            <li className="list-inline-item fw-bolder mx-3">M</li>
                            <button className="btn getstart fw-bolder mx-3">Get Started</button>
                        </ul>
                    </div>
                </div>
                {/* <div className="nav-items">

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                    <li className="dropdown-divider">Features</li>
                    <li><a className="dropdown-item" href="#">Pricing</a></li>
                    <li><a className="dropdownitem" href="#">Documentation</a></li>
                </ul>
                </li>
                </div> */}
            </Container>
          
         </>
     )
 }

   export default NavigationBar

   