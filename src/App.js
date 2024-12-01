import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import AboutUs from './component/AboutUs';
import Numbers from './component/Numbers';
import WhatWeDo from './component/WhatWeDo';
import Choose from './component/Choose';
import Scope from './component/Scope';
import Gallery from './component/Gallery';
import Blogs from './component/Blogs';
import Newsletter from './component/Newsletter';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App flex flex-col">
     <Navbar />
     <Homepage />
     <AboutUs />
     <Numbers />
     <WhatWeDo />
     <Choose />
     <Scope />
     <Gallery />
     <Blogs />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
