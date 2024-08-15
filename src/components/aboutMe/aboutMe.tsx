import './aboutMe.css'

const AboutMe = ()=>{
    return(
        <div className='container-fluid full-content p-3'>
            <h3 className='text-start ms-5 mb-4'>About Me</h3>
            <div className='row d-flex'>
                <div className='col-lg-7 col-12'>
                    <p className='lead p-2 ms-5' style={{textAlign:"justify"}}>
                    a dedicated MERN stack developer with a robust foundation in MongoDB, Express.js, React.js, and Node.js. Over the past year, I’ve been deeply involved in creating dynamic and scalable web applications that drive business success and user engagement. My expertise extends to integrating real-time features, crafting responsive designs, and ensuring seamless user experiences.

                    My notable projects include “Rent a Car”, a comprehensive platform for car rentals that integrates payment gateways and real-time chat features, and “Gampro”, an innovative e-commerce site for gaming enthusiasts with advanced wishlist and cart functionalities. These projects demonstrate my ability to handle complex systems and deliver high-quality solutions.
                    <br/>
                    I am passionate about continuous learning and staying ahead of industry trends. Whether it’s exploring new technologies, refining my skills, or collaborating with others, I am committed to pushing the boundaries of what’s possible.I thrive in dynamic environments where I can contribute my knowledge and creativity to build cutting-edge solutions.
                    </p>
                </div>
                <div className='col-5 d-none d-lg-block'>
                    <img
                        src='/unnamed (1)-Photoroom (1).png'
                        style={{width:'74%', height:'87%'}}
                        className=''/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe