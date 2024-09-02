import React from "react";
import './index.css';
import {SiYoutubekids} from 'react-icons/si';
import {FaHome } from 'react-icons/fa';
import {SiYoutubeshorts} from 'react-icons/si';
import {MdSubscriptions} from 'react-icons/md';
import {GrChannel} from 'react-icons/gr';
import {FaHistory} from 'react-icons/fa';
import {MdOutlinePlaylistPlay} from 'react-icons/md';
import {TbGridDots} from 'react-icons/tb';
import {FaMicrophone} from 'react-icons/fa';
import {FaVideo} from 'react-icons/fa';
import {GoBell} from 'react-icons/go';
import {CgProfile} from 'react-icons/cg';
import {IoMdSearch} from 'react-icons/io';
import {FaThumbsUp} from 'react-icons/fa';
import img13 from './images/Green and White Modern Travel Youtube Thumbnail (10).png';
import img14 from './images/Green and White Modern Travel Youtube Thumbnail (2).png';
import img15 from './images/Green and White Modern Travel Youtube Thumbnail (3).png';
import img16 from './images/Green and White Modern Travel Youtube Thumbnail (4).png';
import img17 from './images/Green and White Modern Travel Youtube Thumbnail (5).png';
import img18 from './images/Green and White Modern Travel Youtube Thumbnail (6).png';
import img19 from './images/Green and White Modern Travel Youtube Thumbnail (7).png';
import img20 from './images/Green and White Modern Travel Youtube Thumbnail (8).png';
import img21 from './images/Green and White Modern Travel Youtube Thumbnail (9).png';



const Data = [
{
    id: 13,
    imgSrc: img13, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 14,
    imgSrc: img14, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 15,
    imgSrc: img15, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 16,
    imgSrc: img16, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 17,
    imgSrc: img17, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 18,
    imgSrc: img18, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 19,
    imgSrc: img19, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 20,
    imgSrc: img20, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},
{
    id: 21,
    imgSrc: img21, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
},    
];
const Home = () =>{
    return(
        <div className="total">
        <div className="header full">
        <TbGridDots className="icons"/>
        <SiYoutubekids className="icons two"/>
        <h2><span>Y</span>TUBE..</h2>
        <input type="text" placeholder="Search" ></input>
        <FaMicrophone className="icons"/>
        <FaVideo className="icons"/>
        <GoBell className="icons"/>
        <CgProfile className="icons"/>

        </div>
        <div className="part">
            <div className="part1">
            <FaHome className="icons1" />
            <SiYoutubeshorts className="icons1"/>
            <MdSubscriptions className="icons1"/>
            <GrChannel className="icons1"/>
            <FaHistory className="icons1"/>
            <MdOutlinePlaylistPlay className="icons1"/>
            <FaThumbsUp className="icons1"/>
            </div>
            <div className="part2">
                <section className="text">
                    <div className="basic">
                        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} /> 
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <span className="name">{location}</span>
                                    </span>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
     </div>
        </div>
        </div>
    )
}
export default Home