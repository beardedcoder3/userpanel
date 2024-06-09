import React, { useState, useEffect } from 'react';
import './styles/Sidebar.css';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faUserFriends, faThLarge, faThList, faBox, faFileInvoice, faHistory, faDownload, faLanguage, faCog, faVideo, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onSelectOption, setHeaderTitle }) => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const navigate = useNavigate();

  const options = [
    { icon: faTachometerAlt, label: 'Dashboard', subOptions: [], hasDropdown: false },
    { icon: faUsers, label: 'Manage Purchases', subOptions: [], hasDropdown: false },
    { icon: faUserFriends, label: 'Support Ticket', subOptions: ['Add Users Group', 'View Users Group'], hasDropdown: false, externalLink: 'https://support.digisolutions4you.com/' },
    { icon: faThLarge, label: 'Package Update', subOptions: ['Add Main Category', 'View Main Category'], hasDropdown: false },
    { icon: faThList, label: 'User Profile', subOptions: ['Add Subcategory', 'View Subcategory'], hasDropdown: false },
    { icon: faBox, label: 'Media Library', subOptions: ['My Images', 'Other Images'], hasDropdown: true },
    { icon: faFileInvoice, label: 'Change Password', subOptions: ['Invoice'], hasDropdown: false },
    { icon: faHistory, label: 'Templates', subOptions: ['Social Media Templates', 'Manage Prints', 'Manage Video', 'Signage4You Templates'], hasDropdown: true },
    { icon: faHistory, label: 'Invoice', subOptions: ['Social Media Templates', 'Manage Prints', 'Manage Video', 'Signage4You Templates'], hasDropdown: false },
    { icon: faDownload, label: 'Logout', subOptions: ['Backup Data', 'Export Data'], hasDropdown: false },

  ];

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setSelectedOption(0);
      setHeaderTitle('Dashboard');
    } else {
      const selected = options.findIndex(option =>
        path.includes(option.label.toLowerCase().replace(' ', '-'))
      );
      setSelectedOption(selected);
      if (selected !== -1 && options[selected].hasDropdown) {
        const subOption = options[selected].subOptions.find(sub =>
          path.includes(sub.toLowerCase().replace(' ', '-'))
        );
        setHeaderTitle(subOption || options[selected].label);
        setSelectedSubOption(subOption);
      } else if (selected !== -1) {
        setHeaderTitle(options[selected].label);
        setSelectedSubOption(null);
      }
    }
  }, [location.pathname]);

  const handleOptionClick = (index, label, externalLink) => {
    setSelectedOption(selectedOption === index ? null : index); // Toggle dropdown
    if (!options[index].hasDropdown) {
      setHeaderTitle(label);
      setSelectedSubOption(null);
      onSelectOption(label);
    }
    if (label === 'Support Ticket') {
      window.open(externalLink, '_blank');
    }
  };

  const handleSubOptionClick = (subOption) => {
    setHeaderTitle(subOption);
    navigate(`/${subOption.toLowerCase().replace(' ', '-')}`);
    setSelectedSubOption(subOption);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="sidebar-options">
        {options.map((option, index) => (
          <li key={index} className={selectedOption === index ? 'selected' : ''}>
            {option.hasDropdown ? (
              <div onClick={() => handleOptionClick(index, option.label, option.externalLink)} className="sidebar-option">
                <FontAwesomeIcon icon={option.icon} className="icon" />
                <span>{option.label}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`arrow ${selectedOption === index ? 'open' : ''}`}
                />
              </div>
            ) : (
              <Link to={option.label === 'Dashboard' ? '/' : `/${option.label.toLowerCase().replace(' ', '-')}`}>
                <div onClick={() => handleOptionClick(index, option.label, option.externalLink)} className="sidebar-option">
                  <FontAwesomeIcon icon={option.icon} className="icon" />
                  <span>{option.label}</span>
                </div>
              </Link>
            )}
            {option.hasDropdown && (
              <ul className={`dropdown ${selectedOption === index ? 'open' : ''}`}>
                {option.subOptions.map((subOption, subIndex) => (
                  <li key={subIndex} className={selectedSubOption === subOption ? 'selected' : ''}>
                    <Link to={`/${subOption.toLowerCase().replace(' ', '-')}`} onClick={() => handleSubOptionClick(subOption)}>
                      {subOption}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
