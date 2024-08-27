import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Homepage} from "./pages/homepage/Homepage";
import {Locations} from "./pages/locations/Locations";
import {ContactInfo} from "./pages/contact/ContactInfo";
import {CurrentPromotions} from "./pages/current-promotions/CurrentPromotions";
import {AboutUs} from "./pages/about-us/AboutUs";
import {Blog} from "./pages/blog/Blog";
import {BlogPost} from "./pages/blog/BlogPost";

export const App = () => {

  return (
      <div className='background-color'>
        <div className='background'>

          <Header/>
          <Routes>
            <Route path="/" element={<Homepage/>}  />
            <Route path="/lokalizacje" element={<Locations/>}  />
            <Route path="/kontakt" element={<ContactInfo/>}  />
            <Route path="/promocje" element={<CurrentPromotions/>}  />
            <Route path="/o-nas" element={<AboutUs/>}  />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/artykul/:id" element={<BlogPost/>} />
          </Routes>
          <Footer/>
        </div>
      </div>
  );
};
