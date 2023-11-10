import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  // User state determined by token in users-service.jsx
  const [user, setUser] = useState(getUser());

  // Display
  return (
    <main className="App">
      {/* Ternairy between logged in/out pages */}
      { user ? 
      <>
        <NavBar user={ user } setUser={ setUser } />
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