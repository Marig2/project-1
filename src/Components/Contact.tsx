import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import { IUser } from './models/IUser';
interface IState {
  user: IUser
}


const Contact: React.FC = () => {

  const [state, setState] = useState<IState>({
    user: {
      name: '',
      email: '',
      subject: '',
      textarea: ''
    }
  });
  const [isHover, setIsHover] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      user:{
      ...state.user,
      [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  }

  const btnStyle = {
    backgroundColor: isHover ? '#003662' : '#071739',
    color: isHover ? 'white' : 'White',
  };


  return (
    <div className='bg-light'>
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-5 py-3">
            <div className="card pt-2  py-5 object-fit-contain border-0 rounded-4 text-light">
              <div className="card-body ms-2 rounded-4 py-4">
                <h5 className="card-title mb-4 fs-2">Contact Information</h5>
                <h6 className="card-subtitle mb-4 text-light lh-lg text-justify">As a passionate Front-End Developer, I specialize in creating responsive, user-friendly web interfaces. I’m always open to collaborating on innovative projects and bringing ideas to life on the web. Feel free to reach out for opportunities, collaborations, or any inquiries!</h6>
                <b>Phon No.</b>
                <p className='pb-3'>+923061303944 </p>
                <b>Email:</b>
                <Link to='#' className='card-link d-block text-decoration-none text-white pb-4'>marigkhan2@gamil.com</Link>
                <b>Linkdin</b>
                <p>Marig Khan</p>
              </div>
            </div>
          </div>


          <div className="col-lg-7 mt-5 ps-5">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-4">
                  <label htmlFor="exampleInputName1" className="form-label text-secondary ps-2">Your Name</label>
                  <input type="name" className="form-control border-0 border-bottom rounded-0" name='name' value={state.user.name} id="exampleInputName1" onChange={handleChange} aria-describedby="nameHelp" style={{ backgroundColor: '#f8f9fa' }} />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputEmail1" className="form-label text-secondary ps-2">Your Email</label>
                  <input type="email" className="form-control border-0 border-bottom rounded-0" name='email' value={state.user.email} id="exampleInputEmail1" onChange={handleChange} style={{ backgroundColor: '#f8f9fa' }} />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputText1" className='from-label text-secondary ps-2'>Your Subject</label>
                  <input type="text" className="form-control border-0 border-bottom rounded-0" name='subject' value={state.user.subject} id="exampleInputtext1" onChange={handleChange} style={{ backgroundColor: '#f8f9fa' }} />
                </div>

                <div>
                  <div>
                    <textarea className="form-control border-0 border-bottom rounded-0 mt-5" name='textarea' value={state.user.textarea} id="exampleFormControlTextarea2" placeholder="Write here your message..." onChange={handleChange} style={{ backgroundColor: '#f8f9fa' }} /></div>
                </div>
              </div>
              <button type='submit' className='btn btn-lg px-4 rounded-0 mt-5' style={btnStyle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;