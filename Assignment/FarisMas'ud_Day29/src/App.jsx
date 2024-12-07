import { useEffect } from 'react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skill from './components/Skill';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Img2 from './assets/react.png';
import Img1 from './assets/golang.png';
import Img3 from './assets/mongodb.png';
import Img4 from './assets/typescript.png';
import Img5 from './assets/docker.png';

const App = () => {
  const Menus = [
    {
      id: 1,
      name: 'Home',
      link: '/#',
    },
    {
      id: 2,
      name: 'Skill',
      link: '/#skills',
    },
    {
      id: 3,
      name: 'About',
      link: '/#about',
    },
  ];

  const Skills = [
    {
      id: 1,
      img: Img1,
      name: 'Golang',
      description: 'A modern and efficient programming language.',
      aosDelay: '100',
    },
    {
      id: 2,
      img: Img2,
      name: 'React',
      description:
        'A JavaScript library for building user interfaces.',
      aosDelay: '300',
    },
    {
      id: 3,
      img: Img3,
      name: 'MongoDB',
      description:
        'A document-oriented NoSQL database.',
      aosDelay: '500',
    },
    {
      id: 4,
      img: Img4,
      name: 'Typescript',
      description:
        'A strongly typed superset of JavaScript.',
      aosDelay: '500',
    },
    {
      id: 5,
      img: Img5,
      name: 'Docker',
      description:
        'A containerization platform.',
      aosDelay: '500',
    },
  ];

  const TestimonialData = [
    {
      id: 1,
      name: 'Faris Masud',
      text: "Faris is an exceptional programmer! Their attention to detail and ability to solve complex problems have significantly improved our project. Truly a valuable asset to any team!",
      img: 'https://picsum.photos/101/101',
    },
    {
      id: 2,
      name: 'Emily White',
      text: 'Working with Faris has been a game-changer. Their innovative approach and dedication to delivering quality code have helped us launch our product successfully. Highly recommend!',
      img: 'https://picsum.photos/102/102',
    },
    {
      id: 3,
      name: 'Michael Brown',
      text: "Faris's programming skills are top-notch. They consistently deliver clean, efficient code and are always willing to lend a hand to team members. A true professional!",
      img: 'https://picsum.photos/104/104',
    },
    {
      id: 4,
      name: 'Olivia Taylor',
      text: "Faris's programming skills are outstanding. They consistently deliver clean, efficient code and are always willing to lend a hand to team members. A true professional!",
      img: 'https://picsum.photos/105/105',
    },
    {
      id: 5,
      name: 'Sophia Green',
      text: "I've never seen a programmer as passionate and talented as Faris. Their work ethic and problem-solving abilities have been instrumental in our project's success. Simply the best!",
      img: 'https://picsum.photos/103/103',
    },
  ];

  const FooterLinks = [
    {
      title: 'Home',
      link: '/#',
    },
    {
      title: 'About',
      link: '/#about',
    },
    {
      title: 'Contact',
      link: '/#contact',
    },
    {
      title: 'Blog',
      link: '/#blog',
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar Menus={Menus} />
      <Home />
      <Skill Skills={Skills} />
      <Banner />
      <Testimonial Testimonials={TestimonialData} />
      <Footer Footers={FooterLinks} />
    </div>
  );
};

export default App;
