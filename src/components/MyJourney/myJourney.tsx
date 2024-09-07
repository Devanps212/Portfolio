import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaLaptopCode, FaGraduationCap, FaHotel, FaCode } from 'react-icons/fa';

const journey = [
    {
        job: "Graduated BSc Catering Science and Hotel Management",
        date: "2018-2021",
        description: "Completed my Bachelor's degree in Catering Science and Hotel Management at Nehru Arts and Science College, Coimbatore.",
        icon: <FaGraduationCap />
    },
    {
        job: "Guest Service Associate at Trident Hotels",
        date: "2021 (3 months)",
        description: "Worked as a Guest Service Associate at Trident Hotels, Willington Island, gaining hands-on experience in customer service and hospitality.",
        icon: <FaHotel />
    },
    {
        job: "Full Stack Developer (MERN/PERN) – Self-Learning",
        date: "2023-2024",
        description: "Learned Full Stack Development through self-learning and practical experience, specializing in MERN and PERN stacks. Applied skills at Brototype, Kochi, where I built and maintained web applications.",
        icon: <FaCode />
    },
    {
        job: "Full Stack Developer (MERN/PERN)",
        date: "2024-Present",
        description: "Currently working as a Full Stack Developer, leveraging MERN and PERN technologies to develop and maintain complex web applications.",
        icon: <FaLaptopCode />
    }
];

const MyJourney = () => {
    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <h3 className="text-center mb-4" style={{ fontWeight: 'bold' }}>My Journey</h3>
            <VerticalTimeline>
                {journey.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{ 
                            background: '#61b3e0', 
                            color: '#fff', 
                            width: '40px',
                            height: '40px', 
                            lineHeight: '40px',
                            fontSize: '20px'
                        }}
                        contentStyle={{ 
                            background: '#f9f9f9', 
                            color: '#333', 
                            padding: '30px',
                            borderRadius: '8px'
                        }}
                        contentArrowStyle={{ 
                            borderRight: '7px solid  #f9f9f9'
                        }}
                        dateClassName="date-class text-white"
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: '#333', fontSize: '16px' }}>{item.job}</h3>
                        <p style={{ color: '#444', fontSize: '14px' }}>{item.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default MyJourney;
