import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import BikeInventories from './Pages/BikeInventories/BikeInventories/BikeInventories';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import BikeInventoryDetails from './Pages/BikeInventories/BikeInventoryDetails/BikeInventoryDetails';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import MyBikeInventory from './Pages/BikeInventories/MyBikeInventory/MyBikeInventory';
import AddBikeInventory from './Pages/BikeInventories/AddBikeInventory/AddBikeInventory';
import { ToastContainer } from 'react-toastify';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import TermsAndConditions from './Pages/AboutUs/TermsAndConditions/TermsAndConditions';
import Privacy from './Pages/AboutUs/Privacy/Privacy';
import Developer from './Pages/Developer/Developer';
import Testimonials from './Pages/Testimonials/Testimonials';
import './App.css';

function App() {
  return (
    <div
      className="app"
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   minHeight: '100vh'
      // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutbikedecor" element={<AboutUs />} />
        <Route
          path="/manageinventories"
          element={
            <RequiredAuth>
              <BikeInventories />
            </RequiredAuth>
          }
        />
        <Route
          path="/manageinventory/:manageinventoryId"
          element={
            <RequiredAuth>
              <BikeInventoryDetails />
            </RequiredAuth>
          }
        />
        <Route
          path="/addinventory"
          element={
            <RequiredAuth>
              <AddBikeInventory />
            </RequiredAuth>
          }
        />
        <Route
          path="/myinventories"
          element={
            <RequiredAuth>
              <MyBikeInventory />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutdeveloper" element={<Developer />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={10000} />
      <Footer />
    </div>
  );
}

export default App;
