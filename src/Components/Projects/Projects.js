import React from 'react';
import gentsParlour from '../../images/Gents-parlour.jpg'
import foodValley from '../../images/food-valley.jpg'
import superClub from '../../images/super-clubes.jpg'
import dreamTeam from '../../images/deram-team.jpg'
import htmlCss from '../../images/html-css.jpg'
import SingleProject from '../SingleProject/SingleProject';
import Navbar from '../Home/Navbar/Navbar'
import redux from '../../images/redux.png'



const projectData = [
  {
    img: gentsParlour,
    tittle: 'Gents Parlour',
    description: 'Full Stack MERN Project ',
    fetchers: ` Different options for different user. you have to submit your mobile number and address to place an order. Services and reviews are dynamic. Viewers can add there own review here.
    `,
    serverCode: 'https://github.com/AhmedKamon/Gent-s-Parlour-server',
    clintCode: 'https://github.com/AhmedKamon/Gent-s-Parlour',
    liveSite: 'https://e-seloon.web.app/'
  },
  {
    img: redux,
    tittle: 'Dev Town',
    description: 'React Redux Project',
    fetchers: `  Learn more about your favourite Developer Create a Team with Pro developers Add developer in cart Add or Remove developer from cart price will be adjusted Created with React Redux
    `,
    serverCode: 'https://github.com/AhmedKamon/Dev-town',
    clintCode: 'https://github.com/AhmedKamon/Dev-town',
    liveSite: 'https://elegant-raman-ce9abf.netlify.app'
  },
  {
    img: foodValley,
    tittle: 'Food Valley',
    description: 'Full Stack MERN Project ',
    fetchers: `
    You can find your daily need's here.
    Order placeable site.
    Admin can add more and more products.
    `,
    serverCode: 'https://github.com/AhmedKamon/FOOD-VALLEY',
    clintCode: 'https://github.com/AhmedKamon/FOOD-VALLEY',
    liveSite: 'https://fresh-food-e1d00.firebaseapp.com/'
  },
  {
    img: superClub,
    tittle: 'Super Club',
    description: 'API Based Website',
    fetchers: `
    Find your favorite league details here.
   Click and explore more about specific Club.
  Dynamic data.
    `,
    clintCode: 'https://github.com/AhmedKamon/Super-League',
    liveSite: 'https://wonderful-kalam-1ed615.netlify.app/'
  },
  {
    img: dreamTeam,
    tittle: 'Dream Team',
    description: 'Add to Cart Type Website',
    fetchers: `
    Find your best player and buy.
    On click player will be added in the cart.
    Player price and player data will be updater to other Components.
    `,
    clintCode: 'https://github.com/Porgramming-Hero-web-course/simple-react-AhmedKamon',
    liveSite: 'https://competent-jones-1b9ff6.netlify.app/'
  },
  {
    img: htmlCss,
    tittle: 'Image Finder',
    description: 'html css  Project ',
    fetchers: `
    Search images by name.
    Add images to create slider.
    Add specific time to add duration in slider.
    `,
    clintCode: 'https://github.com/AhmedKamon/fancy-slider site',
    liveSite: 'https://ahmedkamon.github.io/fancy-slider/index.html'
  }

]

const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      {
        projectData.map(project => <SingleProject project={project} ></SingleProject>)
      }
    </div>
  );
};

export default Projects;