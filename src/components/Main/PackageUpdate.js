import React from 'react';
import './PackageUpdate.css';
import logo from './logo1.png'; // Make sure to adjust the path to your logo

const PackageUpdate = () => {
  const packages = [
    {
      id: 1,
      title: 'Basic Package',
      description: 'This package offers basic features and limited support.',
      price: '$9.99/month',
    },
    {
      id: 2,
      title: 'Premium Package',
      description: 'This package offers premium features and 24/7 support.',
      price: '$19.99/month',
    },
  ];

  return (
    <div className="package-update-container">
      {packages.map((pkg) => (
        <div key={pkg.id} className="package-card">
          <div className="card-header">
            <img src={logo} alt="Logo" className="package-logo" />
          </div>
          <div className="card-body">
            <h2 className="package-title">{pkg.title}</h2>
            <p className="package-description">{pkg.description}</p>
            <p className="package-price">{pkg.price}</p>
          </div>
          <div className="card-footer">
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageUpdate;
