import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Privacy from './Pages/AboutUs/Privacy';
import TermsAndConditions from './Pages/AboutUs/TermsAndConditions';
import LogIn from './Pages/Authentication/LogIn';
import Register from './Pages/Authentication/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth';
import AddBikeInventory from './Pages/BikeInventories/AddBikeInventory';
import BikeInventories from './Pages/BikeInventories/BikeInventories';
import BikeInventoryDetails from './Pages/BikeInventories/BikeInventoryDetails';
import MyBikeInventory from './Pages/BikeInventories/MyBikeInventory';
import Blogs from './Pages/Blogs/Blogs';
import Developer from './Pages/Developer/Developer';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/aboutbikedecor' element={<AboutUs />} />
        <Route
          path='/manageinventories'
          element={
            <RequiredAuth>
              <BikeInventories />
            </RequiredAuth>
          }
        />
        <Route
          path='/manageinventory/:manageinventoryId'
          element={
            <RequiredAuth>
              <BikeInventoryDetails />
            </RequiredAuth>
          }
        />
        <Route
          path='/addinventory'
          element={
            <RequiredAuth>
              <AddBikeInventory />
            </RequiredAuth>
          }
        />
        <Route
          path='/myinventories'
          element={
            <RequiredAuth>
              <MyBikeInventory />
            </RequiredAuth>
          }
        />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/aboutdeveloper' element={<Developer />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={7000} />
      <Footer />
    </div>
  );
}

export default App;
