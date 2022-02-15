import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from '../context';
import {
  headData,
  socialLinks,
  skills,
  contactData
} from '../data';
import "./App.scss";


function App() {
  const [headData, setHeaddata] = useState({})
  const [socialLinks, setSociallinks] = useState([])
  const [skills, setSkills] = useState([])
  const [contactData, setContactdata] = useState({})

  useEffect(() => {
    setHeaddata({...headData});
    setSociallinks({...socialLinks});
    setSkills({...skills});
    setContactdata({...contactData});
  }, [])

  return (
    <PortfolioProvider value={{headData, socialLinks, skills, contactData}}>
      <h1>Henlo</h1>
    </PortfolioProvider>
  );
}

export default App;
