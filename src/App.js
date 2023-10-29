import { Routes, Route } from "react-router-dom";
import './App.css';
// import Dashboard from "./Pages/Dashboard/Dashboard";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import SoftSkillSection from "./Pages/Soft-Skills/SoftSkillSection";
import Login from './components/Login';
import Signup from './components/Signup';
import JobPostingForm from './components/JobContainer/PostJob';
import Chatbot from './components/ChatBot/Chatbot';
import SideNavbar from './components/SideNavBar/SideNavbar';
import ChatUIPage from './Pages/Chat-Page/Chat_Page';
import UserAccount from "./Pages/User/UserAccount";
// import User3 from "./Pages/User/User3";
// import UserSection from "./Pages/User/UserSection";
import JobPortalSection from "./components/JobContainer/JobPortalSection";
import AppliedJobs from "./components/JobContainer/AppliedJobs";
import LiveDoubts from "./Pages/Live-Doubts/LiveDoubts";
import PageNotFound from "./Pages/Page-Not-Found/PageNotFound";
import Calender from "./Pages/Calender/Calender";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Userdashboard from "./Pages/UserDashboard/Userdashboard";

function App() {
  return (
      <div className='App'>
      
        <SideNavbar></SideNavbar>
        
        {/* <Navbar /> */}
        <Routes> 
          {/* <Route exact path='/' element={<Dashboard />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route path='/jobs/all-jbs' element={<JobPortalSection />} />
          <Route path='/about' element={<About />} />
          
          <Route path='/calender' element={< Calender />} />
          <Route path="/live-doubts"  element = {<LiveDoubts />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/chatbot' element={<ChatUIPage />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/jobs/post-job' element={<JobPostingForm />} />
        
          <Route path="/jobs/applied-job" element={<AppliedJobs />} />
          <Route path="*" element={< PageNotFound />} />
          
          
          <Route path="/user" element={ < PrivateRoute />} >
          <Route path='profile' element={< UserAccount />} />
            <Route path='dashboard' element={< Userdashboard />} />
            <Route path='soft-skill' element={<SoftSkillSection />} />
          </Route>

        </Routes>
      </div>
  );
}

export default App;
