import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import { Locations } from './pages/locations/Locations';
import { ContactInfo } from './pages/contact/ContactInfo';
import { CurrentPromotions } from './pages/current-promotions/CurrentPromotions';
import { AboutUs } from './pages/about-us/AboutUs';
import { Blog } from './pages/blog/Blog';
import { BlogPost } from './pages/blog/BlogPost';
import { AgeVerificationModal } from './components/age-verification-modal/AgeVerificationModal';

export const App = () => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [isAgeCheckComplete, setIsAgeCheckComplete] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ageVerified = Cookies.get('ageVerified');
    if (ageVerified === 'true') {
      setIsAgeVerified(true);
    }
    setIsAgeCheckComplete(true);
  }, []);

  useEffect(() => {
    if (!isAgeVerified) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAgeVerified]);

  const handleConfirm = () => {
    Cookies.set('ageVerified', 'true', { expires: 7 });
    setIsAgeVerified(true);
    navigate('/');
  };

  const handleDeny = () => {
    Cookies.set('ageVerified', 'false', { expires: 7 });
    window.location.href = 'https://www.google.pl';
  };

  if (!isAgeCheckComplete) return null;

  return (
      <div className="background-color">
        <div className="background">
          {!isAgeVerified && <AgeVerificationModal onConfirm={handleConfirm} onDeny={handleDeny} />}
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/lokalizacje" element={<Locations />} />
            <Route path="/kontakt" element={<ContactInfo />} />
            <Route path="/promocje" element={<CurrentPromotions />} />
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/aktualnosci" element={<Blog />} />
            <Route path="/artykul/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
};
