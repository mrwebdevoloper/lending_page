import{
    Row,

} from 'reactstrap'

import '../header.css'
import img from '../media/picture.jpg'

const Main2 = () => {
    return(
       
            <Row className='main-section'>
                
                <div className='col-12'>

                <p className='text-primary text-center my-5'>OUR RESOURCES</p>
                <h3 className='text-primary text-center my-3'>Start reading our blog</h3>
                <div className='row main-section2 my-5'>
                    <div className="col-6">
                        <img src={img} alt="picture" />
                    </div>
                    <div className='col-6 pass'>
                        <h3 className='text-primary'>How to start planning</h3>
                        <p className='text-primary   fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio quas libero quos voluptatem maiores, eius ipsa aut optio impedit? Laudantium molestiae quibusdam illo non nisi? Ipsam eligendi iusto eius?</p>
                        <div className='d-flex justify-content-center'>

                        <button className='btn btn-primary'>Read now</button>
                        <p >Add to your bookmarks</p>
                        </div>
                    </div>
                </div>
                   
                </div>
              
                

            </Row>  
            
            
        
    )
}

export default Main2