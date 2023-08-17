import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'
import BackToTopButton from './BackToTop/BackToTopButton';

// import job_img from '../images/job_img2.png';
// import emplyeeImg from '../images/Home-page-img/empl_table.png';
import emplyeeImg from '../images/Home-page-img/job1.png';

import createAccImg from '../images/Home-page-img/create_account.svg';
import createAccWhiteImg from '../images/Home-page-img/create_account_white.svg';
import searchImg from '../images/Home-page-img/search_icon.svg';
import searchWhiteImg from '../images/Home-page-img/search_icon_white.svg';
import uploadFileImg from '../images/Home-page-img/upload_file.svg';
import uploadFileWhiteImg from '../images/Home-page-img/upload_file_white.svg';

import rightSideImg from '../images/Home-page-img/right_icon.svg'



// Adding scrollToTop



// ---ending

function Home  ()  {
  return (
    <div className="home-section-container">
      <BackToTopButton />
      <header>
        <div className="h-logo">
          <h3>Job10X <span>Explore Jobs</span></h3>
          
        </div>
        <div className="h-login-signup">
          <Link href="/">Are you company ?</Link>
          <Link to='/login'id='h-login'>Login</Link>
          <Link to='/signup'id='h-signup'>Sign Up</Link>
          {/* <button type="button" id='h-login'>Log in</button>
          <button type="button" id='h-signup'>Sign Up</button> */}
        </div>
      </header>
      <div class="AlertLabel_container">
        <Link href="https://bit.ly/cuvettepgp" target="_blank" rel="noreferrer" class="AlertLabel_shineAnimation__1BpS_">
          <p>📢 &nbsp; Learn from our experienced instructors and get a Guaranteed Jobs/ Internships | Know More -&gt;</p>
        </Link>
      </div>
    
      <div className='main-container'>

        <div className="home-content">
          <div className="home-content-left">
            <h1>Find A <span className='heading-span'>Job</span> That <span className='heading-span'>Matches</span> Your Passion </h1>
            <p>Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
            <div className="search-section">
                <input type="text" name='search-text' id='search-text-box' placeholder='Search by job title..................'/>
              <button >Search</button>
            </div>
            
          </div>
          <div className="home-content-right">
            <img src={emplyeeImg}  width="700px" alt="employee_img" />
          </div>
        </div>

        <div className="job-process-container">
          <h1>Our Job Process</h1>
          <div className="process-container">
            <div className="service-box">
              <img src={createAccImg} width="40px"  alt="createAccount_icon" className='hideWhenHover  job-process-img' />

              <img src={createAccWhiteImg} width="40px"  alt="createAccount_icon" className='showWhenHover  job-process-img' />

              <h3>Create Account</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis suscipit minus magni ducimus veniam repudiandae provident animi quam illo facere velit amet.</p>

              <a href="/" className='read-more-link'>Read More<img src={rightSideImg} alt="" /></a>
            </div>

            <div className="service-box">
              <img src={searchImg} width="40px"  alt="search_icon" className='hideWhenHover  job-process-img'  />

              <img src={searchWhiteImg} width="40px"  alt="search_icon" className='showWhenHover  job-process-img' />

              <h3>Search Job</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis suscipit minus magni ducimus veniam repudiandae provident animi quam illo facere velit amet.</p>

              <a href="/" className='read-more-link'>Read More<img src={rightSideImg} alt="" /></a>
            </div>

            <div className="service-box">
              <img src={uploadFileImg} width="40px"  alt="uploadFile_icon" className='hideWhenHover  job-process-img' />

              <img src={uploadFileWhiteImg} width="40px"  alt="uploadFile_icon"  className='showWhenHover  job-process-img'/>
              <h3>Upload Resume</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis suscipit minus magni ducimus veniam repudiandae provident animi quam illo facere velit amet.</p>

              <Link href="/" className='read-more-link'>Read More<img src={rightSideImg} alt="" /></Link>
            </div>

          </div>
        </div>

      </div> 
    
      <footer>
        <div className="footer-inside-container">
          <div>
            <h2>Job10XFind</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, modi at esse corrupti dolore non facere.</p>
          </div>
          <div>
            <h2>Job10XFind</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, modi at esse corrupti dolore non facere.</p>
          </div>
          <div>
            <h2>Job10XFind</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, modi at esse corrupti dolore non facere.</p>
          </div>
          <div>
            <h2>Job10XFind</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, modi at esse corrupti dolore non facere.</p>
          </div>
        </div>

        <div className="foot-line">
          <div>
            <h2>Job10XFind</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, modi at esse corrupti dolore non facere.</p>
          </div>
        </div>

      </footer>

            
    </div>
  )
}

export default Home;