import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Letter from './pages/Letter';
import "./app.css";

// Create a global NameContext
const NameContext = createContext();

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    // Store the name in localStorage
    localStorage.setItem("userName", name);

    // Redirect to Mainpage
    navigate('/mainpage');
  };

  return (
    <div className="container">
      <div className="heart-background">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Be My Valentine ❤️</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Get a Proposal</button>
      </form>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState(localStorage.getItem("userName") || ""); // Retrieve from localStorage

  useEffect(() => {
    // Sync name with localStorage whenever it changes
    localStorage.setItem("userName", name);
  }, [name]);

  return (
    <NameContext.Provider value={{ name, setName }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </Router>
    </NameContext.Provider>
  );
};

export default App;
export { NameContext }; // Export the context for other components