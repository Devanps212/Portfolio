import './projects.css'


const Projects = () => {
    return (
        <div className="container-fluid py-5 px-5">
            <h3 className="text-start ms-3 mb-5">Projects</h3>
            <div className="contents d-flex justify-content-center align-items-center w-100">
                <div className="row">
                    <div className="col-md-5 col-12 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                        <div className="image-wrapper text-center">
                            <img
                                src="/MixCollage-09-Aug-2024-10-02-PM-456.jpg"
                                alt="Project Showcase"
                                className="img-fluid rounded shadow"
                                width={400}
                                style={{objectFit:'fill'}}
                            />
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="project-about">
                            <p className="lead" style={{ textAlign: 'justify' }}>
                                I have worked on a diverse set of projects, showcasing my ability to develop robust web applications and user-friendly interfaces. My portfolio includes <strong>"Rent a Car,"</strong> an extensive car rental platform that integrates real-time chat functionality, a payment gateway, and various modules for admin, partner, and user interactions. <strong>"Gampro"</strong> is another major project, an e-commerce platform for purchasing games, complete with features like a wishlist, cart, and secure payment integration.
                                <br /><br />
                                In addition to these, I have built several clones to sharpen my front-end development skills. I developed an <strong>OLX clone</strong>, focusing on replicating its user interface and functionality for online classifieds. Additionally, I created the <strong>Netflix homepage clone</strong>, <strong>Rockstar homepage clone</strong>, and <strong>Sony Pictures homepage clone</strong>, each capturing the design aesthetics and responsive behavior of these well-known platforms. These projects highlight my proficiency in HTML, CSS, JavaScript, and React, along with my attention to detail and commitment to delivering high-quality web solutions.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <span style={{cursor:"pointer"}} className="show-more">Show More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
