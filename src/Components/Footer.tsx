import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start" style={{backgroundColor:'#071739'}}>
  <div className="container d-flex justify-content-center py-5">
    <button type="button" className="btn btn-outline-light btn-lg btn-floating mx-2 fs-2" >
    <FontAwesomeIcon icon={faFacebook} />
    </button>
    <button type="button" className="btn btn-outline-light btn-lg btn-floating mx-2 fs-2">
    <FontAwesomeIcon icon={faLinkedinIn} />
    </button>
    <button type="button" className="btn btn-outline-light btn-lg btn-floating mx-2 fs-2">
    <FontAwesomeIcon icon={faWhatsapp} />
    </button>
    <button type="button" className="btn btn-outline-light btn-lg btn-floating mx-2 fs-2">
    <FontAwesomeIcon icon={faInstagram} />
    </button>
  </div>
  <div className="text-center text-white p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
    © 2024 Copyright
  </div>
</footer>

    </div>
  )
}

export default Footer;
