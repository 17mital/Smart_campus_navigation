import React, { useState } from 'react';
import './Library.css';
import { useNavigate } from 'react-router-dom';  // For navigation

function Library() {
    const navigate = useNavigate();
    const [show360View, setShow360View] = useState(false);  // State to toggle 360 view

    const handleBackHome = () => {
        navigate('/');
    };

    const handleView360 = () => {
        setShow360View(true);
    };

    const handleBackToLibrary = () => {
        setShow360View(false);
    };

    return (
        <div className="library-container">
            {show360View ? (
                <div className="library-map-360">
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!4v1736087531301!6m8!1m7!1sCAoSLEFGMVFpcE9XRE5XLVNfdU9FajAtcTlBM01VVDBhY0MwZWtma2Vyb2tLSk5U!2m2!1d21.2847602874231!2d74.84439128948001!3f126.20842227561852!4f-12.671305404019847!5f0.4000000000000002`}
                        width="100%"
                        height="100%"
                        allowFullScreen
                        title="360 View of NMIMS Library"
                    ></iframe>
                    <button className="back-library-btn" onClick={handleBackToLibrary}>
                        Back to Library
                    </button>
                </div>
            ) : (
                <div className="library-card">
                    <h1 className="library-title">Central Library</h1>
                    <p className="library-description">
                        Explore the heart of the NMIMS Shirpur Campus. Our Central Library provides access to a wide 
                        range of books, journals, and digital content, promoting research and innovation.
                    </p>

                    {/* Library Hours Section */}
                    <div className="library-hours">
                        <h3>Library Hours</h3>
                        <p>Monday - Friday: 9 AM - 8 PM</p>
                        <p>Saturday: 10 AM - 4 PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    {/* View 360 and Back to Home Buttons */}
                    <div className="button-group">
                        <button className="view-360-btn" onClick={handleView360}>
                            View 360
                        </button>
                        <button className="back-home-btn" onClick={handleBackHome}>
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Library;
