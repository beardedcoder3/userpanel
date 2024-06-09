import React from 'react';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBell, faCog, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar, isSidebarOpen, darkMode, toggleDarkMode, pageTitle, userName,  }) => {
  const handleToggleSidebar = () => {
    toggleSidebar(); // Toggle the sidebar
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="menu-icon" onClick={handleToggleSidebar}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`faChevron ${isSidebarOpen ? '' : 'rotate'}`}
        />
      </div>
      <div className="page-title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="header-icons">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>{userName}</span>
        </div>
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="icon"
          onClick={toggleDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
