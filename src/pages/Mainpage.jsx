import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../App'; // Import the context
import "./MainpageStyles.css"; // Import the external CSS file

const Mainpage = () => {
  const { name, setName } = useContext(NameContext); // Get name from context
  const navigate = useNavigate(); // Navigation hook
  const [noButtonStyle, setNoButtonStyle] = useState({}); // State for "No" button position

  useEffect(() => {
    // Retrieve name from localStorage if it's empty in context
    if (!name) {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
        setName(storedName);
      }
    }
  }, [name, setName]);

  // Handle Yes button click (Redirect to Letter page)
  const handleYesClick = () => {
    navigate('/letter');
  };

  // Handle No button hover (Move randomly)
  const handleNoHover = () => {
    const randomX = Math.random() * 300 - 150; // Random X position (-150 to +150 px)
    const randomY = Math.random() * 300 - 150; // Random Y position (-150 to +150 px)
    setNoButtonStyle({ transform: `translate(${randomX}px, ${randomY}px)` });
  };

  return (
    <div className="main-container">
      <h2>Will You Accept My Love, {name || "Guest"}? ❤️</h2>
      <button className="yes-button" onClick={handleYesClick}>Yes</button>
      <button 
        className="no-button" 
        style={noButtonStyle} 
        onMouseEnter={handleNoHover}
      >
        No
      </button>
    </div>
  );
};

export default Mainpage;
