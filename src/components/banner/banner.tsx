import './banner.css';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';


const Banner = () => {
  return (
    <div className="container-fluid position-relative p-0 banner-container">
      <div className="banner d-flex flex-column justify-content-center align-items-center text-center text-light">
        <div className='profile-image mb-4'>
          <img 
            src='https://res.cloudinary.com/dlkrxem40/image/upload/v1723128574/profile/IMG_2360_ip0h5g.jpg'
            alt='Profile Picture'
            width={360}
            height={290}
            className='rounded-circle shadow-lg border border-light p-1'
          />
        </div>
        <div className="intro bg-dark text-light border border-light p-4 rounded shadow-lg w-50 w-md-25">
        <h1 className="display-4 mb-4 text-center typing-animation">Hi, I'm Devan. P. S</h1>
        <div className="icon-container">
          <span className='mx-2 h3 icon-animation'><FaGithub/></span>
          <span className='mx-2 h3 icon-animation'><FaLinkedin/></span>
          <span className='mx-2 h3 icon-animation'><FaYoutube/></span>
          <span className='mx-2 h3 icon-animation'><FaInstagram/></span>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Banner;