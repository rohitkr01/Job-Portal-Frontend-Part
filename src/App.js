import { Routes, Route } from "react-router-dom";
import './App.css';
// import Dashboard from "./components/Dashboard/Dashboard";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import SoftSkillSection from "./components/Soft-Skills/SoftSkillSection";
import Login from './components/Login';
import Signup from './components/Signup';
import JobPostingForm from './components/JobContainer/PostJob';
import Chatbot from './components/ChatBot/Chatbot';
import SideNavbar from './components/SideNavBar/SideNavbar';
import ChatUIPage from './components/ChatBot/Chat_Page';
// import UserAccount from "./components/User/UserAccount";
import User3 from "./components/User/User3";
// import UserSection from "./components/User/UserSection";
import JobPortalSection from "./components/JobContainer/JobPortalSection";
import AppliedJobs from "./components/JobContainer/AppliedJobs";

function App() {
  return (
      <div className='App'>
        <SideNavbar />
        
        {/* <Navbar /> */}
        <Routes> 
          {/* <Route exact path='/' element={<Dashboard />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route path='/jobs/all-jbs' element={<JobPortalSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/soft-skill' element={<SoftSkillSection />} />

          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/chatbot' element={<ChatUIPage />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/jobs/post-job' element={<JobPostingForm />} />
          <Route path='/user' element={<User3 />} />
          <Route path="/jobs/applied-job" element={<AppliedJobs />} />
        </Routes>
      </div>
  );
}

export default App;
