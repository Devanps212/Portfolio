import './banner.css';
import { FaLeaf, FaNodeJs, FaReact, FaTerminal } from 'react-icons/fa';


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
        <div className="intro bg-dark text-light border border-light p-4 rounded shadow-lg w-75 w-md-50">
          <h1 className="display-4 mb-4 text-center">Hi, I'm Devan!</h1>
          <p className="lead text-center mb-0">
            Crafting cutting-edge web applications with a passion for 
            <span className="text-warning me-2"><FaLeaf/> MongoDB</span>,  
            <span className="text-danger me-2"><FaTerminal/> Express.js</span>,  
            <span className="text-info me-2" style={{ color: '#61dafb' }}><FaReact/> React.js</span>, 
            and <span className="text-success me-2"><FaNodeJs/> Node.js</span>. 
            Let's collaborate and build something extraordinary!
          </p>
        </div>

      </div>
    </div>
  );
}

export default Banner;