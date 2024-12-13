import React, {useState} from 'react'

const About:React.FC =()=> {
  
  const [isHover, setIsHover] = useState(false)

  const btnStyle ={
      backgroundColor: isHover ? 'white' : '#071739',
      color: isHover ? '#071739' :  'white',
      border:isHover ? 'none' : '1px solid white',
    };
  return (
    <div>
      <div className="container">
      <div className="row my-5">
      <h1 className='text-white'>About Me</h1>
      <hr style={{color:'white', width:'80%',marginTop:'0'}} />

                <div className="col-lg-6 mt-5">
                    <h1>I have commercial experience providing front-end development, producing high quality resposnive website and exceptional user experience</h1>
                </div>
                <div className="col-lg-6 ps-5 mt-5">
                   <p className='lh-lg text-justify fs-5'> A front-end developer's role to combine design and business logic to achieve a user-facing product. A wide skill set is necessary to produce a quality user experience that lead to meeting business goals.</p>
                    <p className='text-justify ps-3'> Create resposnive website that work on a range of devices</p>
                    <p className='text-justify ps-3'>Bridge communication gap between designer and developer</p>
                    <p className='text-justify ps-3'>Integrate your website into an easy to use content management system </p>
                    <p className='text-justify'>That work I provide of highest quality, fully resposniven, and tested into a wide range of devices.</p>
                    <button className='btn btn-success rounded-0 btn-lg mt-3 mb-5' style={btnStyle} onMouseEnter={()=>setIsHover(true)}  onMouseLeave={()=> setIsHover(false)}> Linkdin Profile </button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default About;