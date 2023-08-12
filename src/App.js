import classes from './App.scss';
import Header from './components/Header/Header';
import About from './components/about/About';
import Advantages from './components/advantages/Advantages';
import Construction from './components/construction/Construction';
import Consultation from './components/consultation/Consultation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import MainBaner from './components/mainBaner/MainBaner';
import PhotoGallery from './components/photoGallery/PhotoGallery';

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <MainBaner/>
      <About/>
      <Advantages/>
      <Layout/>
      {/* <PhotoGallery/> */}
      <Consultation/>
      {/* <Construction/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
