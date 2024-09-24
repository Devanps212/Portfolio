import { FaCode, FaPalette, FaServer } from 'react-icons/fa';

import './myService.css';

const Service = () => {

    const servicesData = [
        {
            name: "Web Development",
            description: "Creating responsive, dynamic, and user-friendly websites tailored to your business needs. Specializing in modern frameworks like React.js and backend technologies like Node.js to deliver scalable and high-performance web applications.",
            icon:<FaCode className="service-icon"/>
        },
        {
            name: "UI/UX Design",
            description: "Designing intuitive and visually appealing user interfaces that offer a seamless user experience. From wireframes to fully-fledged prototypes, I focus on creating designs that are both functional and aesthetically pleasing.",
            icon: <FaPalette className="service-icon" />
        },
        {
            name: "API & Backend Development",
            description: "Developing robust and secure backend systems to power your applications. Expertise in creating RESTful APIs, managing databases, and ensuring smooth data flow between the server and client.",
            icon: <FaServer className="service-icon" />
        }
    ];
    
  return (
    <section className="container-fluid py-5 px-5" id='services'>
      <h3 className="text-center ms-2 mt-4 mb-4">Services</h3>
      <div className="contents justify-content-center align-items-center w-100 mt-5">
        <div className="row">
            {
                servicesData.map((data, index)=>(
                    <div key={index}  className="col-md-4 col-12 mb-4">
                        <div className="card custom-card h-100">
                            <div className="icon">
                                {data.icon}
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">
                                {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Service;