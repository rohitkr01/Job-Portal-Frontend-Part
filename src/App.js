import { Routes, Route } from "react-router-dom";
import './App.css';
// import Dashboard from "./components/Dashboard/Dashboard";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
// import JobList from './components/JobContainer/JobList';
import Login from './components/Login';
// import Navbar from './components/Navbar';
import Signup from './components/Signup';
import JobPostingForm from './components/JobContainer/PostJob';
import Chatbot from './components/ChatBot/Chatbot';
import SideNavbar from './components/SideNavBar/SideNavbar';
import ChatUIPage from './components/ChatBot/Chat_Page';
import UserAccount from "./components/User/UserAccount";
import JobPortalSection from "./components/JobContainer/JobPortalSection";

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
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/chatbot' element={<ChatUIPage />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/jobs/post-job' element={<JobPostingForm />} />
          <Route path='/user' element={<UserAccount />} />
        </Routes>
      </div>
  );
}

export default App;
