import React, { useContext, useEffect } from 'react'
import Nav from './Nav';
import Section from '../Section';
import Footer from './Footer';
import { userContext } from '../../utils/userContex';
import { useNavigate } from 'react-router-dom';

const Home = ()=> {

  const { user, setUser } = useContext(userContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser) {
      setUser(localUser); // update context if found
    } else if (!user) {
      navigate("/login");
    }
  },[]);

  return (<>
    <div>
      <Nav></Nav>
      <Section></Section>
      <Footer></Footer>
    </div>
  </>)

}

export default Home;
