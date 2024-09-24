import { Button } from 'react-bootstrap';
import './banner.css';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';


const Banner = () => {

  const handleResumeDownload = ()=>{
    window.open('https://drive.google.com/file/d/1qn7UtdYL43GdKph7ZvYoQcS77D1SUINO/view?usp=drive_link')
  }

  return (
    <section className="container-fluid position-relative p-0 banner-container" id='home'>
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
          <a href='https://github.com/Devanps212' rel="noopener noreferrer" target='_blank' className='mx-2 h3 icon-animation'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/devan-ps-b79083293/' target='_blank' rel="noopener noreferrer" className='mx-2 h3 icon-animation'><FaLinkedin/></a>
          <a href='https://youtube.com/@gampro6082?si=LQKugP89A2lS6Q_9' target='_blank' rel='noopener noreferrer' className='mx-2 h3 icon-animation'><FaYoutube/></a>
          <a href='https://www.instagram.com/steve__r_o_g_e_r_s/' target='_blank' rel='noopener noreferrer' className='mx-2 h3 icon-animation'><FaInstagram/></a>
        </div>
        <div>
          <Button className='mt-3' onClick={handleResumeDownload}>
            Download Resume
          </Button>
        </div>
      </div>


      </div>
    </section>
  );
}

export default Banner;