import React from 'react';
import "./Dashboard.css";
import company_icons from "./images/icon-briefcase.png";
// import newslatter_icon from "./images/Newsletter-image.png"

function Dashboard() {
  return (
    <div className='Dashboard'>
      <header class="hero-section">
        <nav class="nav-bar">
          <h2 class="logo">JJO</h2>
          <div class="nav-items">
            <a href="/">Discounts</a>
            <a href="/">About us</a>
            <a href="/">FAQ</a>
            <a href="/">Blog</a>
            <button>Login</button>
          </div>
        </nav>
        <div class="hero-text-section">
          <h1>Juniors Make IT Work</h1>
          <p>Hire and Invest in highly skilled juniors now!</p>
          <button>Post Offer Now</button>
        </div>
      </header>

      <div class="job-offers">
        <h1>Newest Job Offers </h1>
        <a href="/">View all job offers</a>
      </div>

      <section class="jobs-section">
        <div class="job">
          <div class="job-title">
            <h2>Reactjs Developer</h2>
            <p>1 hours ago</p>
          </div>
          <div class="job-location">
            <h4>PickSaaS</h4>
            <p>London,UK</p>
          </div>
          <div class="job-description">
            <p>I am looking for a Java Developer. <br /> Project for public sector location.NewYork<br /> (during the pandemic remote work)<br /> $ upto PLN 550 net / MD B2B  </p>
          </div>
        </div>
        <div class="job">
          <div class="job-title">
            <h2>Reactjs Developer</h2>
            <p>1 hours ago</p>
          </div>
          <div class="job-location">
            <h4>PickSaaS</h4>
            <p>London,UK</p>
          </div>
          <div class="job-description">
            <p>I am looking for a Java Developer. <br /> Project for public sector location.NewYork<br /> (during the pandemic remote work)<br /> $ upto PLN 550 net / MD B2B  </p>
          </div>
        </div>
        <div class="job">
          <div class="job-title">
            <h2>Reactjs Developer</h2>
            <p>1 hours ago</p>
          </div>
          <div class="job-location">
            <h4>PickSaaS</h4>
            <p>London,UK</p>
          </div>
          <div class="job-description">
            <p>I am looking for a Java Developer. <br /> Project for public sector location.NewYork<br /> (during the pandemic remote work)<br /> $ upto PLN 550 net / MD B2B  </p>
          </div>
        </div>
      </section>

      <section class="feature-companies">
        <h1>Featured Companies</h1>
        <div class="companies-container">
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src= {company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src= {company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src={company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
          <div class="company">
            <div class="icon-container">
              <img src= {company_icons} alt="" />
            </div>
            <h2>GrandParade</h2>
          </div>
        </div>
      </section>

      <section class="clt-section">
        <div class="clt-text-section">
          <h1>Recieve New Job Offers.</h1>
          <p>Want to know as soon as a new job offer is posted on our<br />
            website?Subscribe to our weekly job offer digest.</p>
          <div class="email-container">
            <input type="email" placeholder="Enter email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <footer class="footer-container">
        <a href="/">Job offers</a>
        <a href="/">Companies</a>
        <a href="/">Discounts</a>
        <a href="/">About us</a>
        <a href="/">Juniors</a>s
        <a href="/">FAQ</a>
        <a href="/">Blog</a>
        <a href="/">Terms</a>
        <a href="/">Privacy Policy</a>
      </footer>
    </div>
  )
}

export default Dashboard;