// Dashboard.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faClipboard, faScroll, faBox, faShareAlt, faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Card 1 */}
      <div className="card card1">
        <div className="card-content">
          <div className="info">
          
          </div>
         
        </div>
        <div className="more-info">
        
        </div>
      </div>

      {/* Other Cards */}
      <div className="card card2">
        <div className="card-content">
          <div className="info">
            
          </div>
          <div className="icon">
          
          </div>
        </div>
        <div className="more-info">
         
        </div>
      </div>

      {/* Repeat for other cards */}


      <div className="card card3">
        <div className="card-content">
          <div className="info">
            
          </div>
          <div className="icon">
          
          </div>
        </div>
        <div className="more-info">
         
        </div>
      </div>





      <div className="card card4">
        <div className="card-content">
          <div className="info">
            
          </div>
          <div className="icon">
          
          </div>
        </div>
        <div className="more-info">
         
        </div>
      </div>



      <div className="card card5">
        <div className="card-content">
          <div className="info">
            
          </div>
          <div className="icon">
          
          </div>
        </div>
        <div className="more-info">
         
        </div>
      </div>


      <div className="card card6">
        <div className="card-content">
          <div className="info">
            
          </div>
          <div className="icon">
          
          </div>
        </div>
        <div className="more-info">
         
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
