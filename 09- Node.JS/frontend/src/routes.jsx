import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Views/home';
import OurStores from './Views/nossaslojas';
import NotFound from './Views/notfound';
import MyProducts from './Views/produtos';
import Home from './Views/home';
import Contact from './Views/faleconosco';

const MainRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nossaslojas" element={<OurStores />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/produtos" element={<MyProducts/>} />
            <Route path="/index" element={<Home/>} />
            <Route path="faleconosco" element={<Contact/>} />
        </Routes>
    );
}

export default MainRoutes;