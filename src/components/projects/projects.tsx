import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const images = [
        { path: "/Screenshot (312).png", link: "https://github.com/Devanps212/OLX__Clone.git" },
        { path: "/Screenshot (313).png", link: "https://github.com/Devanps212/Netflix_Clone.git" },
        { path: "/Screenshot (315).png", link: "https://github.com/Devanps212/Movie_Quote_Quiz_Frontend.git" },
        { path: "/Screenshot (316).png", link: "" },
        { path: "/Screenshot (318).png", link: "https://github.com/Devanps212/Spictures.io.git" }
    ];

    return (
        <div className='container'>
            <h3 className='text-center mb-4'>Projects</h3>
            <div className='row d-flex flex-column justify-content-center align-items-center'>
                <div className='col-md-10 col-12 main-projects'>
                    <div className='d-flex justify-content-between'>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid object-fit-cover h-100 rounded border'
                                src="/Screenshot (311).png"
                                alt="Project 1"
                            />
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid object-fit-cover h-100 rounded border'
                                src="/Screenshot (310).png"
                                alt="Project 2"
                            />
                        </div>
                    </div>
                </div>
                <div className='col-md-12 p-0 m-0'>
                    <Slider {...settings} className='mt-5'>
                        {images.map((image, index) => (
                            <Link to={image.link} key={index}>
                                <div key={index} className='image-Content'>
                                    <img
                                        className='img-fluid object-fit-cover rounded'
                                        src={image.path}
                                        alt={`Project ${index + 1}`}
                                    />
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Projects;
