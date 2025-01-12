import React from 'react'
import Homepage from '../component/Homepage';
import AboutUs from '../component/AboutUs';
import Numbers from '../component/Numbers';
import WhatWeDo from '../component/WhatWeDo';
import Choose from '../component/Choose';
import Scope from '../component/Scope';
import Gallery from '../component/Gallery';
import Blogs from '../component/Blogs';
import Newsletter from '../component/Newsletter';
import PutAdoption from './PutAdoption';

export default function Main() {
  return (
    <div>
    <Homepage />
      <AboutUs />
      <Numbers />
      <WhatWeDo />
      <Choose />
      <Scope />
      <Gallery />
      <PutAdoption />
      <Blogs />
      <Newsletter />
    </div>
  )
}
