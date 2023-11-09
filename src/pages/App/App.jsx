import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  // States
  const [user, setUser] = useState(null);

  // Display
  return (
    <main className="App">
      {/* Ternairy between logged in/out pages */}
      { user ? 
      <>
        <NavBar/>
        {/* Routes for NewOrder & History pages */}
        < Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={< OrderHistoryPage />}/> 
        </Routes>
      </>

      : 
      < AuthPage setUser={ setUser} /> }
    </main>
  );
}