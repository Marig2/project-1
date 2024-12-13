import React from 'react';
const Skills: React.FC = () => {
  const progress = {
    backgroundColor: '#071739'
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
        <h1 className='text-light pe-5'>Skills
          <hr style={{color:'white', width:'80%',marginTop:'0'}} />
        </h1>
          <div className="col-lg-6 mt-5 ps-5">
            <div>
              <h5 className='ms-5 text-light'>HTML</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar  progress-bar-striped " style={{ width:'95%',...progress}}> 95%<div/>
            </div>
            </div>
          </div>

          <div className='mt-5'>
              <h5 className='ms-5 text-light'>JavaScript</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped w-75" style={progress} > 75%<div/>
            </div>
            </div>
          </div>

          <div className='mt-5'>
              <h5 className='ms-5 text-light'>React TS</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped" style={{width:'80%', ...progress}}> 80%<div/>
            </div>
            </div>
          </div>
        </div>

      <div className="col-lg-6 ps-5">
      <div className='mt-5'>
              <h5 className='ms-5 text-light'>CSS</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped" style={{width:'90%', ...progress}} > 90%<div/>
            </div>
            </div>
          </div>

          <div className='mt-5'>
              <h5 className='ms-5 text-light'>TypeScript</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped  w-75" style={progress} > 70%<div/>
            </div>
            </div>
          </div>

          <div className='mt-5'>
              <h5 className='ms-5 text-light'>MS SQL</h5>
            <div className="progress w-50" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped w-50" style={progress} > 50%<div/>
            </div>
            </div>
          </div>
      </div>

      </div>
    </div>
    </div >
  )
}

export default Skills
