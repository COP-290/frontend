import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tag from './components/tag';
import Navbar from './components/navbar';
import Par_ques from './components/particular_question';
import New_ques from './components/new_question';
import Question from './components/question';
import Profile from './components/profile';
import Login from './components/login';
import Signup from './components/sign_up';
import About from './components/about';
import Fzf from './components/404';
import Main from './components/main';
import Search from './components/search';
import User from './components/users_page';
import Par_user from './components/par_user';

function App() {
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  return (
    <>
      <Router>
        <Routes>     
          <Route path="/" element={<><Navbar/><Main/></>} />
          <Route path="/about" element={<><Navbar/><About/></>} />        
          <Route path="/tag" element={<><Navbar/><Tag/></>} />        
          <Route path="/tag/:id" element={<><Navbar/><Question/> </>} />               
          <Route path="/particular_question" element={<><Navbar/><Par_ques/></>} />               
          <Route path="/new_question" element={<><Navbar/><New_ques/></>} />        
          <Route path="/question/:id" element={<><Navbar/><Par_ques/></>} />        
          <Route path="/question" element={<><Navbar/><Question/></>} />        
          <Route path="/search" element={<><Navbar/><Search/></>} />        
          <Route path="/profile" element={<><Navbar/><Profile/></>} />        
          <Route path="/login" element={<><Navbar/><Login/></>} />        
          <Route path="/signup" element={<><Navbar/><Signup/></>} />
          <Route path="/user" element={<><Navbar/><User/></>} />
          <Route path="/user/:id" element={<><Navbar/><Par_user/></>} /> 
          <Route path="/:id" element={<Fzf/>} />       
        </Routes>
      </Router>
    </>
  );
}
export default App;
