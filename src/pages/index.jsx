import React, {useState} from 'react';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne} from '../Components/InfoSection/Data';
import NavBar from '../Components/Navbar';
import Services from '../Components/Services';
import SideBar from '../Components/SideBar';
import LastSection from '../Components/LastSection';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <NavBar toggle={toggle}/>
         <HeroSection/>
         <InfoSection {...homeObjOne}/>    
         <Services/>  
         <LastSection/>
        </>
    )
}

export default Home
