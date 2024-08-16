import ProgressBar from 'react-bootstrap/ProgressBar';

const skills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.JS', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Bootstrap', level: 85 },
    { name: 'GitHub', level: 90 },
    { name: 'TypeScript', level: 70 },
    { name: 'Redux', level: 60 },
    { name: 'Express JS', level: 75 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'Figma', level: 65 },
    { name: 'DSA', level: 50 },
];

const Skills = () => {
    return (
        <div className='container-fluid py-5 px-5'>
            <h3 className='text-start ms-2 mb-4'>Skills</h3>
            <div className='contents d-flex justify-content-center align-items-center w-100'>
                <div className="row w-100">
                    <div className="col-md-6 col-12">
                        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                            <div key={index} className='my-3 p-1'>
                                <h5>{skill.name}</h5>
                                <ProgressBar now={skill.level} label={`${skill.level}%`} />
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6 col-12">
                        {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                            <div key={index} className='my-3 p-1'>
                                <h5>{skill.name}</h5>
                                <ProgressBar now={skill.level} label={`${skill.level}%`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
