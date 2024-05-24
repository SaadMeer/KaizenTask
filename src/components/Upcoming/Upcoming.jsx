import React from 'react'
import './Upcoming.scss'
import img1 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709276609824.png';
import img2 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709267675708.jpg';
import img3 from '../../assets/images/0x9fc1aa5157ee24801a6e27a09784170eb12c502d1709200760567.jpg';
import img4 from '../../assets/images/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709279774838.png';

const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4];

const Upcoming = () => {
    return (
        <div className="services-container services-container-new">
            <h5 className='textGradient'>UPCOMING PROJECTS</h5>
            <h2>Over Best Ones</h2>

            <div className="services-card-container">
                {images.map((img, index) => (
                    <div className="svg-container" key={index}>
                        <img className="services-box-img" src={img} alt="" />
                        <div className="services-text">
                            <button className="themeBtnSmall flex items-center gap-3">
                                Check
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upcoming
