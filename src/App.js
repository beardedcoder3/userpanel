import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Main/Dashboard';
import PackageUpdate from './components/Main/PackageUpdate';
import UserProfile from './components/Main/UserProfile';
import UserImages from './components/Main/UserImages';
import ChangePass from './components/Main/ChangePass';
import ManagePurchases from './components/Main/ManagePurchases';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserInfo from './components/UserInfo';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSelectOption = (title) => {
    setPageTitle(title);
  };

  return (
    <Router>
      <div className={`app ${isSidebarOpen ? '' : 'sidebar-closed'} ${isDarkMode ? 'dark-mode' : ''}`}>
        <ToastContainer />
        {user ? (
          <>
            <Sidebar isOpen={isSidebarOpen} onSelectOption={handleSelectOption} setHeaderTitle={setPageTitle} />
            <div className="main-content">
              <Header toggleSidebar={toggleSidebar} pageTitle={pageTitle} toggleDarkMode={toggleDarkMode}  userName={user ? user.surname : ''}  />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/package-update" element={<PackageUpdate />} />
                  <Route path="/user-profile" element={<UserProfile />} />
                  <Route path='/my-images' element={<UserImages />} />
                  <Route path='/change-password' element={<ChangePass />} />
                  <Route path='/manage-purchases' element={<ManagePurchases />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
