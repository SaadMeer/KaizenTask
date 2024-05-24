import React from 'react';
import './Projects.scss';
import img1 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709276609824.png';
import img2 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709267675708.jpg';
import img3 from '../../assets/images/0x9fc1aa5157ee24801a6e27a09784170eb12c502d1709200760567.jpg';
import img4 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709279774838.png';

const Projects = () => {
    const data = [
        {
            id: 1,
            h3: 'Me Heart',
            p: 'Lorem ipsum dolor sit',
            img: img1,
        },
        {
            id: 2,
            h3: 'Me Heart',
            p: 'Lorem ipsum dolor sit',
            img: img2,
        },
        {
            id: 3,
            h3: 'Me Heart',
            p: 'Lorem ipsum dolor sit',
            img: img3,
        },
        {
            id: 4,
            h3: 'Me Heart',
            p: 'Lorem ipsum dolor sit',
            img: img4,
        },
    ];
    
    return (
        <div className="services-container">
            <h5 className='textGradient'>RECENT PROJECTS</h5>
            <h2>Over Best Ones</h2>

            <div className="services-card-container">
                {data.map((item, index) => (
                    <div className="services-card-box" key={index}>
                        <img className="services-box-img" src={item.img} alt="" />
                        <div className="services-text">
                            <h3>{item.h3}</h3>
                            <p>{item.p}</p>
                            <button className="themeBtnSmall flex items-center gap-3">
                                Check
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
