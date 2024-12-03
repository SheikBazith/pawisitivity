import React from 'react'
import Navbar from '../component/Navbar';

import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
     </div>
  )
}
