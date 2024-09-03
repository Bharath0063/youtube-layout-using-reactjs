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



const Data = [
{
    id: 13,
    imgSrc: img13, 
    destTitle: 'How to Travel the World on a Budget: Insider Tips!',
    location: '1M views . 10days ago',
    
},
{
    id: 14,
    imgSrc: img14, 
    destTitle: 'Top 10 Must-Visit Destinations for Adventure Lovers!',
    location: '10k views . 20days ago',
   
},
{
    id: 15,
    imgSrc: img15, 
    destTitle: 'How to Travel the World on a Budget: Insider Tips!',
    location: '1M views . 10years ago',
   
},
{
    id: 16,
    imgSrc: img16, 
    destTitle: 'Best Hidden Gems You Didnt Know About Travel Edition',
    location: '10M views . 10years ago' ,
   
},
{
    id: 17,
    imgSrc: img17, 
    destTitle: 'Ultimate Travel Hacks for 2024 – Save Time and Money!',
    location: '11M views . 10years ago',
},
   
{
    id: 18,
    imgSrc: img18, 
    destTitle: 'The Most Beautiful Beaches in the World Ranked',
    location: '100M views . 100years ago',
    
},
{
    id: 19,
    imgSrc: img19, 
    destTitle: 'How to Pack Like a Pro: Travel Essentials You Need',
    location: '1 views . 10years ago',
},
{
    id: 20,
    imgSrc: img20, 
    destTitle: 'Traveling Solo: The Ultimate Guide for First-Timers',
    location: '100k views . 1day ago',
   
},
{
    id: 14,
    imgSrc: img14, 
    destTitle: 'Traveling with Kids: Tips for a Stress-Free Vacation',
    location: '1M views . 10days ago',
   
},
{
    id: 16,
    imgSrc: img16, 
    destTitle: 'Top 10 Overrated Travel Destinations – Are They Worth It?',
    location: '1M views . 10days ago',
   
},
{
    id: 13,
    imgSrc: img13, 
    destTitle: 'My Crazy Travel Stories: You Won’t Believe What Happened!',
    location: '1M views . 10days ago',
    
},
{
    id: 18,
    imgSrc: img18, 
    destTitle: 'Top 5 Travel Mistakes to Avoid – Dont Let This Happen to You',
    location: '1M views . 10days ago',
    
},  
{
    id: 16,
    imgSrc: img16, 
    destTitle: 'Best Hidden Gems You Didnt Know About Travel Edition',
    location: '10M views . 10years ago' ,
   
},
{
    id: 17,
    imgSrc: img17, 
    destTitle: 'Ultimate Travel Hacks for 2024 – Save Time and Money!',
    location: '11M views . 10years ago',
},
   
{
    id: 18,
    imgSrc: img18, 
    destTitle: 'The Most Beautiful Beaches in the World Ranked',
    location: '100M views . 100years ago',
    
},
{
    id: 19,
    imgSrc: img19, 
    destTitle: 'How to Pack Like a Pro: Travel Essentials You Need',
    location: '1 views . 10years ago',
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
        <div className="navbar">
            <ul>
                <li>All</li>
                <li>Music</li>
                <li>Tamil Cinema</li>
                <li>Web pages</li>
                <li>Gaming</li>
                <li>Computers</li>
                <li>News</li>
                <li>Live</li>
                <li>Test</li>
                <li>Album</li>
                <li>Watched</li>
            </ul>
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
                        {Data.map(({ id, imgSrc, destTitle, location}) => (
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