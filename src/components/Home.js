import React from 'react';
// import Navbar from './Navbar';
// import LeftNavbar from './Left-Navbar';
// import SideNavbar from './SideNavBar/SideNavbar';
import job_img from '../images/job_img2.png';
import '../style/Home.css'

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="h-logo">
          <h3>Job10X <span>Explore Jobs</span></h3>
          
        </div>
        <div className="h-login-signup">
          <a href="/">Are you company ?</a>
          <button type="button" id='h-login'>Log in</button>
          <button type="button" id='h-signup'>Sign Up</button>
        </div>
      </header>
      <div class="AlertLabel_container">
        <a href="https://bit.ly/cuvettepgp" target="_blank" rel="noreferrer" class="AlertLabel_shineAnimation__1BpS_">
          <p>📢 &nbsp; Learn from our experienced instructors and get a Guaranteed Jobs/ Internships | Know More -&gt;</p>
        </a>
      </div>
      <main>
        <div className='rightside_container'>
            <div className="home_content">
              <h2>This is Home Page</h2>
              <img src={job_img} alt="job_img" width='100%' />

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas, nulla incidunt neque perspiciatis facere nihil perferendis, deleniti a id maxime illo error rerum, ut velit sunt qui libero? Ipsam.</p>
            </div>
        </div> 
      </main>
            
    </div>
  )
}

export default Home;