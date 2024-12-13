import { useState } from 'react';
import portfolio from '../images/image1.jpg';
import {Link} from 'react-router-dom';


 const Home:React.FC =()=> {

    const [isHover, setIsHover] = useState(false)

    const btnStyle ={
        backgroundColor: isHover ? 'white' : '#071739',
        color: isHover ? '#071739' :  'white',
        border:isHover ? 'none' : '1px solid white',
      };

    return (
        <div>

        <div className="container">
            <div className="row">
                <div className="col-lg-7 pt-5 mt-3">
                <p className='display-1'> Bring Your brand to life with our help </p>
                <p className='mt-3 fs-4 mt-5'> In your role as a professional Web developer you'r up for just about any website-building challenge. </p>
                <Link to='/Contact' className='btn btn-lg px-4 rounded-0 mt-3' style={btnStyle} onMouseEnter={()=>setIsHover(true)}  onMouseLeave={()=> setIsHover(false)}>Contact</Link>
                </div>
                <div className="col-lg-5 pt-5">
                    <div style={{
                        width:'100%',
                        aspectRatio:'16/9',
                        objectFit:'cover'
                    }}>
                    <img src={portfolio} alt="" className='ms-5 ms-auto'/>
                    </div>
                </div>
            </div>

        </div>        
        </div>
    )
}

export default Home
