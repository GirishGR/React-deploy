
import React from 'react'
// import Navbar from './Navbar';
import Header from './Header';
import ContactMe from './ContactMe';
import Education from './Education';
import Footer from './Footer';
import Skills from './Skills';
import AboutMe from './AboutMe';
// import Navigationbar from './NavigationBar';
import Navbar from './Navbar';
// import Contact from './Contact';



const Home = () => {
  return <>
      <Navbar/>
        {/* <Navigationbar/> */}
      <Header/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <ContactMe/>
      <Footer/> 

     
    </>
  
}

export default Home;
