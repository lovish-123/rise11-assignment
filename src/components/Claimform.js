import React, { useState } from "react";
import { FaDollarSign, FaMapMarkerAlt, FaLanguage, FaFileAlt, FaHandshake, FaPaperclip } from "react-icons/fa";
import "../App.css";

const Claimform = () => {
  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    place: "",
    language: "",
    isPlaceCorrect: null,
    isLanguageCorrect: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Jur</div>
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>My Cases</li>
          <li>Activities</li>
          <li>Calendar</li>
          <li>Files</li>
          <li>Open a Dispute</li>
        </ul>
        <div className="sidebar-footer">Get Justice on every Claim</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-step completed">
            <div className="step-circle">01</div>
            <div className="step-label">Preliminary</div>
          </div>
          <div className="progress-step completed">
            <div className="step-circle">02</div>
            <div className="step-label">Your Details</div>
          </div>
          <div className="progress-step completed">
            <div className="step-circle">03</div>
            <div className="step-label">KYC</div>
          </div>
          <div className="progress-step active">
            <div className="step-circle">04</div>
            <div className="step-label">Parties</div>
          </div>
          <div className="progress-step upcoming">
            <div className="step-circle">05</div>
            <div className="step-label">Claim</div>
          </div>
          <div className="progress-step upcoming">
            <div className="step-circle">06</div>
            <div className="step-label">Review</div>
          </div>
          <div className="progress-step upcoming">
            <div className="step-circle">07</div>
            <div className="step-label">Payment</div>
          </div>
        </div>

        <h2 className="form-title">File Your Claim</h2>

        {/* Claim Form */}
        <div className="form-grid">
          {/* Claim Value Section */}
          <div className="widget">
            <div className="widget-header">
              <FaDollarSign className="widget-icon" />
              <h3 className="widget-title">Claim Value</h3>
            </div>
            <div className="form-group">
              <label className="form-label">Contract Value (USD)</label>
              <input
                type="number"
                name="contractValue"
                value={formData.contractValue}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Claim Value (USD)</label>
              <input
                type="number"
                name="claimValue"
                value={formData.claimValue}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Place Section */}
          <div className="widget">
            <div className="widget-header">
              <FaMapMarkerAlt className="widget-icon" />
              <h3 className="widget-title">Place</h3>
            </div>
            <div className="form-group">
              <label className="form-label">Place</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                className="form-input"
              />
              <p className="form-label-small">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <div className="toggle-buttons">
                <button
                  type="button"
                  className={`toggle-button ${
                    formData.isPlaceCorrect === true ? "active" : ""
                  }`}
                  onClick={() => handleToggle("isPlaceCorrect", true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`toggle-button ${
                    formData.isPlaceCorrect === false ? "active" : ""
                  }`}
                  onClick={() => handleToggle("isPlaceCorrect", false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div className="widget">
            <div className="widget-header">
              <FaLanguage className="widget-icon" />
              <h3 className="widget-title">Language</h3>
            </div>
            <div className="form-group">
              <label className="form-label">Language</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="form-input"
              />
              <p className="form-label-small">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <div className="toggle-buttons">
                <button
                  type="button"
                  className={`toggle-button ${
                    formData.isLanguageCorrect === true ? "active" : ""
                  }`}
                  onClick={() => handleToggle("isLanguageCorrect", true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`toggle-button ${
                    formData.isLanguageCorrect === false ? "active" : ""
                  }`}
                  onClick={() => handleToggle("isLanguageCorrect", false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="form-grid file-upload-section">
          <div className="widget">
            <div className="widget-header">
              <FaFileAlt className="widget-icon" />
              <h3 className="widget-title">Statement</h3>
            </div>
            <div className="file-upload-box">
              <input type="file" name="statement" className="form-input-file" />
            </div>
          </div>
          <div className="widget">
            <div className="widget-header">
              <FaHandshake className="widget-icon" />
              <h3 className="widget-title">Agreement under Disputes</h3>
            </div>
            <div className="file-upload-box">
              <input type="file" name="agreement" className="form-input-file" />
            </div>
          </div>
          <div className="widget">
            <div className="widget-header">
              <FaPaperclip className="widget-icon" />
              <h3 className="widget-title">Additional Documentation</h3>
            </div>
            <div className="file-upload-box">
              <input type="file" name="documentation" className="form-input-file" />
            </div>
          </div>
        </div>

        <button className="submit-button">Submit Claim</button>
      </main>
    </div>
  );
};

export default Claimform;
